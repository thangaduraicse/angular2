import { Hero } from '../model/hero';
import { HEROES } from '../mocks/mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  getHeroes = () => Promise.resolve(HEROES);

  // See the "Take it slow" appendix
  getHeroesSlowly = () => new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 2000));

  getHero = (id: number) => this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));

}
