import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  userName = '';

  public selectedIndex = 0;
  public tabs = [
    {
      title: 'Peliculas',
      url: 'peliculas',
      icon: 'film-outline'
    },
    {
      title: 'Favoritas',
      url: 'favoritas',
      icon: 'star-outline'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

    //This subscription allow to change the 'ion-note' of the 'ion-menu' to user account's name. If no user is logged, nothing is displayed
    this.authService.user.subscribe( x => {
      if (x != null) {
        this.userName = x.displayName;
      }else{
        this.userName = '';
      }
    })
  }
}
