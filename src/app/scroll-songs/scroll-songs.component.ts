import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../song.model';
import { Set, setRow } from '../Set.model';

import { SongsService } from '../songs.service';
import { SetsService } from '../sets.service';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  sets: Set[];
  set: Set;
  setList: Set[] = [];
  setRows: setRow[] = [];
  newSet: Set;
  newRow: setRow;
  setDate: Date = new Date();
  dateString = '';
  private songsSub: Subscription;
  private setsSub: Subscription;

  constructor(public songsService: SongsService,
              public setsService: SetsService) {}


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

  addtoSet(song: Song) {

     const newRow: setRow = new setRow();
     newRow.Seq = 'S';
     newRow.Key = song.MusicalKey;
     newRow.FirstLine = song.FirstLine;
     newRow.SongRef = song.SongRef;
     newRow.Title = song.SongTitle;
     newRow.Lyrics = song.Lyrics;
     newRow.Style = 'Std';
     this.setRows.splice(this.setRows.length, 0 , newRow);
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
    let newRow: setRow = new setRow();
    newRow.Seq = 'AM';
    newRow.Title = '';
    newRow.Style = 'time';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Seq = 'PM';
    newRow.Title = '';
    newRow.Style = 'time';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new setRow();
    newRow.Style = 'splitter';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    this.setStarted = true;
  }
  clearSet() {
    this.setRows.length = 0;
  }

  showMenuOptions() {
    return 'Delete;AM Title;PM Title;Spacer;Standard Song;Pre Song;Extra Song';
}


rightClick(event, index) {
  event.stopPropagation();
  this.xPosTabMenu = event.clientX;
  this.yPosTabMenu = event.clientY;
  this.indexTabMenu = index;
  this.isHidden = false;
  return false;
}

closeRightClickMenu() {
  this.isHidden = true;
}

handleMenuSelection( menuselection: string) {
  if ( menuselection === 'Delete') {
    this.setRows.splice(this.indexTabMenu, 1);
  } else if ( menuselection === 'Standard Song') {
    this.setRows[this.indexTabMenu].Style = 'song';
    this.setRows[this.indexTabMenu].Seq = 'S';
  } else if ( menuselection === 'Pre Song') {
    this.setRows[this.indexTabMenu].Style = 'Pre';
    this.setRows[this.indexTabMenu].Seq = 'P';
  } else if ( menuselection === 'Extra Song') {
    this.setRows[this.indexTabMenu].Style = 'Extra';
    this.setRows[this.indexTabMenu].Seq = 'X';
  }
}


transformDate(date) {
  return this.datepipe.transform(date, 'yyyy-MM-dd');
}

getSets() {
  this.chooseSet = true;
  this.setsService.getSets(
    );
  this.setsSub = this.setsService.getSetUpdateListener()
    .subscribe((sets: Set[]) => {
      this.sets = sets;
      this.set = this.sets[0];
      this.hasData = true;
    });
}

  ngOnDestroy() {
    this.songsSub.unsubscribe();
  }

}
