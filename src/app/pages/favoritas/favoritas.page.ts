import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.page.html',
  styleUrls: ['./favoritas.page.scss'],
})
export class FavoritasPage implements OnInit {

  films:Film[] = [];

  constructor(public dbService:DbService, public authService:AuthService, public cdr:ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.authService.user.subscribe( x => {
      this.dbService.onFavAdded( favAdded => {

        this.dbService.database.ref(this.dbService.filmsPath + favAdded.key).once('value').then( x => {
          this.films.push(x.val());
          this.cdr.detectChanges();
        })
  
      });
  
      this.dbService.onFavRemoved( favRemoved => {
  
        this.films.splice(this.films.findIndex( x => x.id == favRemoved.key), 1);
        this.cdr.detectChanges();
  
      });
    })
  }

}
