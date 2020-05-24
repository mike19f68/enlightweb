import { Component, OnInit, OnDestroy , ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { Song } from '../song.model';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-scroll-songs',
  templateUrl: './scroll-songs.component.html',
  styleUrls: ['./scroll-songs.component.css']
})
export class ScrollSongsComponent implements OnInit, OnDestroy {

  @Output() SongToSend = new EventEmitter<Song>();

  songs: Song[] = [];
  song: Song;
  private songsSub: Subscription;
  private songSub: Subscription;

  constructor(public songsService: SongsService) {}
  isLoading = false;
  ActiveIndex = 0;
  searchString = '';
  selectedGroup = 0;
  selectedAge = 1;
  selectedRating = 2;


  ngOnInit() {
    this.songsService.getSongs(this.selectedGroup, this.selectedAge, this.selectedRating, this.searchString);
    this.isLoading = true;
    this.songsSub = this.songsService.getSongUpdateListener()
      .subscribe((songs: Song[]) => {
        this.isLoading = false;
        this.songs = songs;
        this.SongToSend.emit(this.songs[0]);
      });
  }

  ngOnDestroy() {
    this.songsSub.unsubscribe();
  }
  showLyrics(selectedSong: Song, index: number) {
    this.ActiveIndex = index;
    try {
      this.SongToSend.emit(selectedSong);
    }
    catch (e) {
      console.log(e);
    }
  }
}

