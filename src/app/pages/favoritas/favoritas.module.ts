import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritasPageRoutingModule } from './favoritas-routing.module';

import { FavoritasPage } from './favoritas.page';
import { FilmItemComponent } from '../../components/film-item/film-item.component';
import { LoginComponent } from '../../components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritasPageRoutingModule
  ],
  declarations: [
    FavoritasPage,
    FilmItemComponent,
    LoginComponent
  ]
})
export class FavoritasPageModule {}
