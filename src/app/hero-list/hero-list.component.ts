import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers: [HeroService],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  minutes: number = 0;

  constructor(private service: HeroService) {}

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
