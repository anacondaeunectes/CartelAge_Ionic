import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';
import { FilmItemComponent } from '../../components/film-item/film-item.component';
import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule
  ],
  declarations: [
    PeliculasPage,
    FilmItemComponent,
    LoginComponent
  ]
})
export class PeliculasPageModule {}
