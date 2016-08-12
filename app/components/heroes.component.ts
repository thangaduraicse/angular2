import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls:  ['app/assets/css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes = () => this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  onSelect = (hero: Hero) => this.selectedHero = hero;
  gotoDetail = () => this.router.navigate(['/detail', this.selectedHero.id]);

  addHero = () => {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close = (savedHero: Hero) => {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero = (hero: Hero, event: any) => {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
