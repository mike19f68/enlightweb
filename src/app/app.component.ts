import { Component } from '@angular/core';

import { Song } from './song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enlightWeb';
  icon = '../../assets/Images/logo.png';
  storedSongs: Song[] = [];
}
