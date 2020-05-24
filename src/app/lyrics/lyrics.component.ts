import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})


export class LyricsComponent implements OnInit {
  hasData = false;
  // tslint:disable-next-line: variable-name
  private _songData: Song = null;

  @Input()
    set currentSong(currentSong: Song) {
    this._songData = currentSong;
    if (currentSong.SongTitle !== '') {
      this.hasData = true;
    } else {
      this.hasData = false;
    }
  }
  get currentSong(): Song {
   // this.hasData = true;
    return this._songData;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
