import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../song.model';
import { Set, SetRow } from '../set.model';

import { SongsService } from '../songs.service';
import { SetsService } from '../sets.service';
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
   sets: Set[];
   set: Set;
   setList: Set[] = [];
   setRows: SetRow[] = [];
   newSet: Set;
   setDate: Date = new Date();
   private songsSub: Subscription;
   private setsSub: Subscription;


  constructor(public songsService: SongsService,
              public setsService: SetsService) {}


  isLoading = false;
  public chooseSet = false;
  ActiveIndex = 0;
  searchString = '';
  selectedGroup = '0';
  selectedAge = '1';
  selectedLead = 'Mike';
  selectedRating = '2';
  sortField = 'SongRef';
  sortDirection = -1;
  setList1: any;

  public isHidden = true;
  xPosTabMenu = 0;
  yPosTabMenu = 0;
  indexTabMenu = 0;

  public datepipe: DatePipe;

  SelectedLeader: string;
  Leaders: string[] = ['Mike', 'Ian', 'Jill', 'Terry'];


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
     const newRow: SetRow = new SetRow();
     newRow.SRType = 'S';
     newRow.SRMusicalKey = song.MusicalKey;
     newRow.SRFirstLine = song.FirstLine;
     newRow.SRRef = song.SongRef;
     newRow.SRTitle = song.SongTitle;
     newRow.SRPaceGrp = song.PaceGrp;
     this.setRows.splice(this.setRows.length, 0 , newRow);
     this.setStarted = true;
  }

  onDateSelected() {
     const d: Date = this.setDate;
  }

  loadTemplate() {
    let newRow: SetRow = new SetRow();
    newRow.SRTitle = 'AM';
    newRow.SRType = 'T';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new SetRow();
    newRow.SRType = 'L';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new SetRow();
    newRow.SRType = 'L';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new SetRow();
    newRow.SRType = 'L';
    this.setRows.splice(this.setRows.length, 0 , newRow);
    newRow = new SetRow();
    this.setStarted = true;
  }

  clearSet() {
    this.setRows.length = 0;
    this.setStarted = false;
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
  let newRow: SetRow = new SetRow();
  if ( menuselection === 'Delete') {
    this.setRows.splice(this.indexTabMenu, 1);
    if (this.setRows.length === 0) {
      this.setStarted = false;
    }
  } else if ( menuselection === 'Standard Song') {
    this.setRows[this.indexTabMenu].SRType = 'S';
  } else if ( menuselection === 'Pre Song') {
    this.setRows[this.indexTabMenu].SRType = 'P';
  } else if ( menuselection === 'Extra Song') {
    this.setRows[this.indexTabMenu].SRType = 'X';
  } else if (menuselection === 'Spacer') {
    newRow = new SetRow();
    newRow.SRType = 'L';
    this.setRows.splice(this.setRows.length, 0 , newRow);
  } else if (menuselection === 'AM Title') {
    newRow = new SetRow();
    newRow.SRTitle = 'AM';
    newRow.SRType = 'T';
    this.setRows.splice(this.setRows.length, 0 , newRow);
  } else if (menuselection === 'PM Title') {
    newRow = new SetRow();
    newRow.SRTitle = 'PM';
    newRow.SRType = 'T';
    this.setRows.splice(this.setRows.length, 0 , newRow);
  }
}


transformDate(date) {
 return this.datepipe.transform(date, 'dd mmm yy');
}

toggleSets() {
  if (this.chooseSet === false)
  {
    this.chooseSet = true;
    this.getSets();
  } else {
    this.chooseSet = false;
  }
}
LeaderChanged() {
  this.getSets();
}

getSets() {
    this.setsService.getSets(
      this.selectedLead
    );
    this.setsSub = this.setsService.getSetUpdateListener()
      .subscribe((sets: Set[]) => {
      this.sets = sets;
    });
  }

  LoadSet(set: Set) {
    console.log(set.Leader + ' - ' + set.SetName + ' - ' + set.id + ' - ' + set.SetRows);
    console.log(set);
    this.chooseSet = false;
  }

  ngOnDestroy() {
    this.songsSub.unsubscribe();
    this.setsSub.unsubscribe();
  }

}

