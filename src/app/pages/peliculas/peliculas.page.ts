import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  filmsList:Film[] = [];


  constructor(public dbService:DbService, public authService:AuthService) { 
    this.dbService.films$.subscribe( x => this.filmsList = x);
   }
  
  ngOnInit() {
  }

}
