import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

import { Song } from './song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  title = 'enlightWeb';
  icon = '../../assets/Images/logo.png';
  storedSongs: Song[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
         this.userIsAuthenticated = isAuthenticated;
         console.log(isAuthenticated);
      });
  }
}

