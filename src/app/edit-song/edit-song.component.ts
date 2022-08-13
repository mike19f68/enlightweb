import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Song } from '../Shared/song.model';
import { SongsService } from '../Shared/songs.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent {

  hasData = false;
  setStarted = false;
  songs: Song[];
  song: Song;

  setDate: Date = new Date();
  dateString = '';
  private songsSub: Subscription;

  isLoading = false;
  chooseSet = false;
  ActiveIndex = 0;
  searchString = '';
  selectedGroup = '0';
  selectedAge = '1';
  selectedRating = '2';
  sortField = 'SongRef';
  sortDirection = -1;
  setList1: any;

  public isHidden = true;
  xPosTabMenu = 0;
  yPosTabMenu = 0;
  indexTabMenu = 0;

  public datepipe: DatePipe;
  SongRef = null;
  Title = '';
  FirstLine = '';
  Lyrics = '';
  Author = '';
  CCLIRef = '';
  Copyright = '';
  PaceGrp = '';
  Rating = 3;
  LastPlay = null;
  MusicalKey = '';
  Tempo = null;

  constructor(public songsService: SongsService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.songsService.getSongs(
      this.selectedGroup,
      this.selectedAge,
      this.selectedRating,
      this.searchString,
      this.sortField,
      this.sortDirection
      );
    this.isLoading = true;
    this.songsSub = this.songsService.getSongUpdateListener()
      .subscribe((songs: Song[]) => {
        this.isLoading = false;
        this.songs = songs;
        this.song = this.songs[0];
        this.hasData = true;
      });
    console.log('GotSongs');
  }

  changeSort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = -this.sortDirection;
    }
    else {
      this.sortField = field;
      if (field === 'SongRef') {
         this.sortDirection = -1;
      } else {
         this.sortDirection = 1;
      }
    }
    this.getSongs();
    this.ActiveIndex = 0;
}
selectSong(selectedSong: Song, index: number) {
  this.hasData = true;
  this.song = selectedSong;
  this.ActiveIndex = index;
}

onAddSong(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.songsService.addSong(
      null,
      form.value.SongRef,
      form.value.Title,
      form.value.FirstLine,
      form.value.Lyrics,
      form.value.Author,
      form.value.CCLIRef,
      form.value.Copyright,
      form.value.PaceGrp,
      form.value.Rating,
      form.value.LastPlay,
      form.value.MusicalKey,
      form.value.Tempo
      );
    form.resetForm();
  }
  deleteSong(SelectedSong: Song, index: number) {
    if (!this.hasData) {
      return;
    }
    this.songsService.deleteSong(this.song.id);
    console.log(this.song.id);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.songsSub.unsubscribe();
  }

}
