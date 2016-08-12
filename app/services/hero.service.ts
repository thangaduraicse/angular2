import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../model/hero';

@Injectable()

export class HeroService {

  private heroesUrl = 'app/heroes';

  constructor(private http: Http) { }

  getHeroes = () => this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);

  // getHeroes = () => Promise.resolve(HEROES);
  // See the "Take it slow" appendix
  // getHeroesSlowly = () => new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 2000));

  getHero = (id: number) => this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));

  // getHero = (id: number) => this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));

  save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http
               .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(hero: Hero) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
