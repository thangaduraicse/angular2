import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()

export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
