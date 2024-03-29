import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SalesTaxComponent } from './sales-tax.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { HeroService } from './hero.service';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent,
    ColorChangeComponent,
  ],
  providers: [BackendService, HeroService, Logger],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
