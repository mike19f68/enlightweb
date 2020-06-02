import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../song.model';
import { Set } from '../Set.model';

import { SongsService } from '../songs.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-scroll-songs',
  templateUrl: './scroll-songs.component.html',
  styleUrls: ['./scroll-songs.component.css']
})



export class ScrollSongsComponent implements OnInit, OnDestroy {
  hasData = false;
  setStarted = false;
  songs: Song[];
  song: Song;
  setList: Set[] = [];
  newSet: Set;
  setDate: Date = new Date();
  dateString = '';
  private songsSub: Subscription;

  constructor(public songsService: SongsService) {}

  isLoading = false;
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

  public datepipe: DatePipe;

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
  }

  showLyrics(selectedSong: Song, index: number) {
    this.hasData = true;
    this.song = selectedSong;
    this.ActiveIndex = index;
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

  addSong(song: Song) {

     const newSet: Set = new Set();
     newSet.Seq = 'x';
     newSet.Key = song.MusicalKey;
     newSet.FirstLine = song.FirstLine;
     newSet.SongRef = song.SongRef;
     newSet.Title = song.SongTitle;
     newSet.Lyrics = song.Lyrics;
     newSet.Style = 'Extra';

     this.setList.splice(this.setList.length, 0, newSet);
     this.setStarted = true;
  }

  onDateSelected() {
    console.log(this.setDate);
    const d: Date = this.setDate;
    console.log();
    console.log(d.getFullYear);
    console.log(this.setDate.getFullYear);
  }

  loadTemplate() {
    let newSet: Set = new Set();
    newSet.Seq = 'AM';
    newSet.Title = '';
    newSet.Style = 'time';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Seq = 'PM';
    newSet.Title = '';
    newSet.Style = 'time';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    newSet = new Set();
    newSet.Style = 'splitter';
    this.setList.splice(this.setList.length, 0 , newSet);
    this.setStarted = true;
  }
clearSet() {
  this.setList.length = 0;
}

rightClick(event, index) {
  event.stopPropagation();
  this.xPosTabMenu = event.clientX;
  this.yPosTabMenu = event.clientY;
  this.isHidden = false;
  console.log(index);
  this.setList[index].Style = 'song';
  return false;
}

closeRightClickMenu() {
  this.isHidden = true;
}

transformDate(date) {
  return this.datepipe.transform(date, 'yyyy-MM-dd');
}




  ngOnDestroy() {
    this.songsSub.unsubscribe();
  }




}
