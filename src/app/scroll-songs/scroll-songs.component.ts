import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../song.model';
import { Set, SetRow , LocalRow} from '../set.model';

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
   LocalRows: SetRow[] = [];
   LocalsetRows: SetRow[] = [];
   newSet: Set;
   private songsSub: Subscription;
   private setsSub: Subscription;

  constructor(
    public songsService: SongsService,
    public setsService: SetsService,
    public datepipe: DatePipe) {}

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
  setDate = {year: 2022, month: 8, day: 4};

  public isHidden = true;
  xPosTabMenu = 0;
  yPosTabMenu = 0;
  indexTabMenu = 0;

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
     const newRow: LocalRow = new LocalRow();
     newRow.SRType = 'S';
     newRow.SRMusicalKey = song.MusicalKey;
     newRow.SRFirstLine = song.FirstLine;
     newRow.SRRef = song.SongRef;
     newRow.SRTitle = song.SongTitle;
     newRow.SRPaceGrp = song.PaceGrp;
     this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
     this.setStarted = true;
  }

  onDateSelected() {
     const max = this.LocalRows.length;
     for (let i = 0; i < max ; i++) {
      if (this.LocalRows[i].SRType === 'A') {
        this.LocalRows[i].SRTitle = this.transformDate(this.setDate) + ' am';
      }
      if (this.LocalRows[i].SRType === 'B') {
        this.LocalRows[i].SRTitle = this.transformDate(this.setDate) + ' pm';
      }
     }
  }

  loadTemplate() {
    let newRow: SetRow = new LocalRow();
    newRow.SRTitle = this.transformDate(this.setDate) + ' am';
    newRow.SRType = 'A';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SRType = 'L';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SRType = 'L';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SRType = 'L';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    this.setStarted = true;
  }

  clearSet() {
    this.LocalRows.length = 0;
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
  let newRow: LocalRow = new LocalRow();
  if ( menuselection === 'Delete') {
    this.LocalRows.splice(this.indexTabMenu, 1);
    if (this.LocalRows.length === 0) {
      this.setStarted = false;
    }
  } else if ( menuselection === 'Standard Song') {
    this.LocalRows[this.indexTabMenu].SRType = 'S';
  } else if ( menuselection === 'Pre Song') {
    this.LocalRows[this.indexTabMenu].SRType = 'P';
  } else if ( menuselection === 'Extra Song') {
    this.LocalRows[this.indexTabMenu].SRType = 'X';
  } else if (menuselection === 'Spacer') {
    newRow = new LocalRow();
    newRow.SRType = 'L';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  } else if (menuselection === 'AM Title') {
    newRow = new LocalRow();
    newRow.SRTitle = this.transformDate(this.setDate) + ' am';
    newRow.SRType = 'A';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  } else if (menuselection === 'PM Title') {
    newRow = new LocalRow();
    newRow.SRTitle = this.transformDate(this.setDate) + ' pm';
    newRow.SRType = 'B';
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  }
}

transformDate(date) {
  const ngbDate = date;
  const myDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
  console.log(JSON.stringify(myDate));
  return this.datepipe.transform(myDate, 'dd MMM yy');
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
    this.LocalRows.length = 0;
    const max = set.setRows.length;
    for (let i = 0; i < max ; i++) {
      const newRow: LocalRow = new LocalRow();
      newRow.SRType = set.setRows[i].SR_Type;
      newRow.SRMusicalKey = set.setRows[i].SR_MusicalKey;
      newRow.SRFirstLine = set.setRows[i].SR_FirstLine;
      newRow.SRRef = set.setRows[i].SR_Ref;
      newRow.SRTitle = set.setRows[i].SR_Title;
      newRow.SRPaceGrp = set.setRows[i].SR_PaceGrp;
      this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
      this.setStarted = true;
    }
    this.chooseSet = false;
  }

  ngOnDestroy() {
    this.songsSub.unsubscribe();
    this.setsSub.unsubscribe();
  }

}

