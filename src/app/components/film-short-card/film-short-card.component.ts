import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-film-short-card',
  templateUrl: './film-short-card.component.html',
  styleUrls: ['./film-short-card.component.scss'],
})
export class FilmShortCardComponent implements OnInit {

  @Input()
  film:Film = {
    title: "asd",
    id: 900,
    cartel_ref: '',
    isFav: true
  };

  @Input()
  fav:boolean = true;

  img_src:string = "";

  constructor(public storage:StorageService, public dbService:DbService, public authService:AuthService, public cdr:ChangeDetectorRef) {
     console.log('Desde constructor de film-short-card');
     this.authService.user.subscribe( x => {
       this.dbService.database.ref('Users/' + x.uid + '/favList/').once('value',  y => console.log(y.val()))
     })
  }


  ngOnInit(): void {
    // console.log('film: ', this.film)
    // this.getImgUrl();
    // this.getFav();
    // console.log('test isFav: ', this.film.isFav )
  }

  /* This method search film's property url in database and assign the response to 'img_src' property */ 
  async getImgUrl() {
    this.storage.getImg(this.film.cartel_ref).then( url => {
      this.img_src = url;
      this.cdr.detectChanges()
    });
  }

  getFav(){
    this.dbService.database.ref(this.dbService.usersPath + this.authService.uid + '/favList/' + this.film.id).on('value', x => {
      console.log(x.val())
      if (x.val()) {
        this.film.isFav = true;
      }
    })
  }

  switchFav(){
    if (this.film.isFav) {
      this.dbService.removeFav(this.film.id);
      this.film.isFav = !this.film.isFav;
    } else {
      this.dbService.addFav(this.film.id);
    }
    // console.log(this.film.isFav);
    // console.log(this.film.isFav);
  }

}
