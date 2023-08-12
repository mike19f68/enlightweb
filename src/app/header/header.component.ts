import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { Song } from '../Shared/song.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  leader = '';
  title = 'enlightWeb';
  icon = '../../assets/Images/logo.png';
  storedSongs: Song[] = [];

   constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
         this.userIsAuthenticated = isAuthenticated;
      });
  }
  onLogout() {
    this.authService.logout();
  }

}
