import { Component, OnInit, OnDestroy , ViewChild } from '@angular/core';
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

  songs: Song[] = [];
  private songsSub: Subscription;

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;

  constructor(public songsService: SongsService) {}
  isLoading = false;

  ngOnInit() {
    this.songsService.getSongs();
    this.isLoading = true;
    this.songsSub = this.songsService.getSongUpdateListener()
      .subscribe((songs: Song[]) => {
        this.isLoading = false;
        this.songs = songs;
      });
  }

  ngOnDestroy() {
    this.songsSub.unsubscribe();
  }

}
