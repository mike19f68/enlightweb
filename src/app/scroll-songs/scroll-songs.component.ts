import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Song } from '../Shared/song.model';
import { SongSet, LocalRow} from '../Shared/songset.model';

import { SongsService } from '../Shared/songs.service';
import { SetsService } from '../Shared/songsets.service';
import { addFonts } from '../Shared/addFonts';

import { DatePipe } from '@angular/common';
import { DialogService } from '../Shared/dialog.service';

import {Injectable} from '@angular/core';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { jsPDF } from "jspdf";


@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';
  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-scroll-songs',
  templateUrl: './scroll-songs.component.html',
  styleUrls: ['./scroll-songs.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})

export class ScrollSongsComponent implements OnInit, OnDestroy {

   hasData = false;
   setStarted = false;
   songs: Song[];
   song: Song;
   songsets: SongSet[];

   currentId = '';
   LocalRows: LocalRow[] = [];

   private songsSub: Subscription;
   private setsSub: Subscription;

  constructor(
    public songsService: SongsService,
    public setsService: SetsService,
    public addFonts: addFonts,
    public datepipe: DatePipe,
    private dialogservice: DialogService) {}

  isLoading = false;
  setsLoading = false;
  public chooseSet = false;
  public namingSet = false;
  ActiveIndex = 0;
  searchString = '';
  selectedGroup = '0';
  selectedAge = '1';
  selectedRating = '2';
  sortField = 'SongRef';
  sortDirection = -1;
  setList1: any;

  amSongs = 0;
  pmSongs = 0;
  eXtras = 0;
  duplicates = 0;
  hasDuplicates = '';
  public isHidden = true;
  xPosTabMenu = 0;
  yPosTabMenu = 0;
  indexTabMenu = 0;
  dialogTitle = '';
  dialogMsg = '';
  public setDate = {};
  public setName: string;
  public origName: string;

  leader: string;
  selectedLead: string;
  Leaders: string[] = ['Mike', 'Ian', 'Jill', 'Terry'];


  displayStyle = 'none';

  ngOnInit() {
    const currentDt = new Date();
    const month = currentDt.getMonth() + 1;
    const day = currentDt.getDate();
    const year = currentDt.getFullYear();
    this.setDate ={year, month, day};
    this.setName = this.serializeDate(this.setDate);
    this.leader = localStorage.getItem('leader');
    this.selectedLead = this.leader;
    this.getSongs();
  }

  onSearchChange() {
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
     newRow.SR_Type = 'S';
     newRow.SR_MusicalKey = song.MusicalKey;
     newRow.SR_FirstLine = song.FirstLine;
     newRow.SR_Ref = song.SongRef;
     newRow.SR_Title = song.SongTitle;
     newRow.SR_PaceGrp = song.PaceGrp;
     this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
     this.setStarted = true;
     this.buildFooter();
  }

  onDateSelected() {
     this.setName = this.serializeDate(this.setDate);
     const max = this.LocalRows.length;
     for (let i = 0; i < max ; i++) {
      if (this.LocalRows[i].SR_Type === 'A') {
        this.LocalRows[i].SR_Title = this.setName + ' am';
      }
      if (this.LocalRows[i].SR_Type === 'B') {
        this.LocalRows[i].SR_Title = this.setName + ' pm';
      }
     }
  }

  clearId() {
    if (this.origName != this.setDate)
    {
      this.currentId=null;
    }
  }

  loadTemplate() {
    let newRow: LocalRow = new LocalRow();
    newRow.SR_Title = this.serializeDate(this.setDate) + ' am';
    newRow.SR_Type = 'A';
    newRow.SR_Ref = 0;
    newRow.SR_FirstLine = "";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SR_Type = 'L';
    newRow.SR_Ref = 0;
    newRow.SR_Title = "-------------------------";
    newRow.SR_FirstLine = "-------------------------";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SR_Type = 'L';
    newRow.SR_Ref = 0;
    newRow.SR_Title = "-------------------------";
    newRow.SR_FirstLine = "-------------------------";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    newRow.SR_Type = 'L';
    newRow.SR_Ref = 0;
    newRow.SR_Title = "-------------------------";
    newRow.SR_FirstLine = "-------------------------";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
    newRow = new LocalRow();
    this.setStarted = true;
  }

  clearSet() {
    this.LocalRows.length = 0;
    this.setStarted = false;
    this.currentId = '';
    this.buildFooter();
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
    this.buildFooter();
  } else if ( menuselection === 'Standard Song') {
    this.LocalRows[this.indexTabMenu].SR_Type = 'S';
  } else if ( menuselection === 'Pre Song') {
    this.LocalRows[this.indexTabMenu].SR_Type = 'P';
  } else if ( menuselection === 'Extra Song') {
    this.LocalRows[this.indexTabMenu].SR_Type = 'X';
  } else if (menuselection === 'Spacer') {
    newRow = new LocalRow();
    newRow.SR_Type = 'L';
    newRow.SR_Ref = 0;
    newRow.SR_Title = "-------------------------";
    newRow.SR_FirstLine = "-------------------------";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  } else if (menuselection === 'AM Title') {
    newRow = new LocalRow();
    newRow.SR_Title = this.serializeDate(this.setDate) + ' am';
    newRow.SR_Type = 'A';
    newRow.SR_Ref = 0;
    newRow.SR_FirstLine = "";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  } else if (menuselection === 'PM Title') {
    newRow = new LocalRow();
    newRow.SR_Type = 'B';
    newRow.SR_Ref = 0;
    newRow.SR_Title = this.serializeDate(this.setDate) + ' pm';
    newRow.SR_FirstLine = "";
    newRow.SR_PaceGrp = 0;
    newRow.SR_MusicalKey = null;
    this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
  }
}
deleterow(index) {
  this.LocalRows.splice(index, 1);
  if (this.LocalRows.length === 0) {
    this.setStarted = false;
  }
  this.buildFooter();
}

serializeDate(date) {
    if (isNaN(date.day))
    {
      return date;
    }
    const ngbDate = date;
    const myDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    const rtnDate: string  = this.datepipe.transform(myDate, 'dd MMM yyyy');
    return rtnDate;
}
deserializeDate(date: string) {
  const [day, mmm, year] = date.split(' ');
  const month = 'JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(mmm) / 3 + 1;
  const myDate = {year: +year, month: +month, day: +day};
  if (isNaN(myDate.day))
  {
    return date;
  }
  else{
    return myDate;
  }
}

clicktoLoad() {
  if (this.chooseSet === false)
  {
    this.chooseSet = true;
    this.namingSet = false;
    this.selectedLead = localStorage.getItem('leader');
    this.getSets();
  } else {
    this.chooseSet = false;
  }
}
LeaderChanged(event) {
  this.selectedLead = event.target.value;
  this.getSets();
}
getSets() {
    this.setsLoading = true;
    this.setsService.getSets(
      this.selectedLead
    );
    this.setsSub = this.setsService.getSetUpdateListener()
      .subscribe((songsets: SongSet[]) => {
      this.songsets = songsets;
      this.setsLoading = false;
    });
  }

<<<<<<< HEAD
  NameChanged(event) {
    this.stringDate = event.target.value;
  }

checkExists(setName) {
  this.stringDate = setName;

  this.setsService.findSet(
    this.selectedLead,
    this.stringDate
  );
  this.setsSub = this.setsService.getSetUpdateListener()
    .subscribe((fndsets: SongSet[]) => {
    this.songsets = fndsets;
  });

  console.log(JSON.stringify(this.songsets));

  if (this.songsets.length > 0) {
    console.log(this.stringDate + ' exists' + this.songsets[0].SetDate);
    return true;
  } else {
    console.log(this.stringDate + ' doesnt exist' + this.songsets[0].SetDate);
    return false;
  }
}

=======
>>>>>>> ac434a9 (SetSave)
  LoadSet(loadset: SongSet) {
    this.currentId = loadset.id;
    this.LocalRows.length = 0;
    const max = loadset.SetRows.length;
    for (let i = 0; i < max ; i++) {
      const newRow: LocalRow = new LocalRow();
      newRow.SR_Type = loadset.SetRows[i].SR_Type;
      newRow.SR_Ref = loadset.SetRows[i].SR_Ref;
      newRow.SR_Title = loadset.SetRows[i].SR_Title;
      newRow.SR_FirstLine = loadset.SetRows[i].SR_FirstLine;
      newRow.SR_PaceGrp = loadset.SetRows[i].SR_PaceGrp;
      newRow.SR_MusicalKey = loadset.SetRows[i].SR_MusicalKey;
      this.LocalRows.splice(this.LocalRows.length, 0 , newRow);
      this.setStarted = true;
    }
    this.setDate = this.deserializeDate(loadset.SetDate);
    this.setName = loadset.SetDate;
    this.origName = loadset.SetDate;
    this.chooseSet = false;
    this.buildFooter();
  }

  buildFooter() {
    let am = false;
    this.amSongs = 0;
    let pm = false;
    this.pmSongs = 0;
    this.eXtras = 0;
    const max = this.LocalRows.length;
    for (let i = 0; i < max; i++) {
      switch (this.LocalRows[i].SR_Type) {
        case 'A':
          am = true;
          pm = false;
          break;
        case 'B':
          pm = true;
          am = false;
          break;
        case 'S': case 'P':
          if (pm === true) {
            this.pmSongs++;
          } else {
            this.amSongs++;
          }
          break;
        case 'X':
          this.eXtras++;
          break;
      }
    }
    this.toFindDuplicates();
  }

  toFindDuplicates() {
    this.duplicates = 0;
    this.hasDuplicates = '';
    const arr = [];
    const max = this.LocalRows.length;
    for (let i = 0; i < max; i++) {
      if (this.LocalRows[i].SR_Type === 'S' || this.LocalRows[i].SR_Type === 'P' || this.LocalRows[i].SR_Type === 'X' ) {
         if ( arr.includes(this.LocalRows[i].SR_Ref, 0) ) {
            this.duplicates ++;
            this.hasDuplicates = 'hasDuplicates';
         } else {
           arr.push(this.LocalRows[i].SR_Ref);
         }
      }
    }
  }
  exporttortf() {

    const TopMargin = 2.54;
    const LeftMargin = 1.54;
    const max = this.LocalRows.length;
    if (max === 0){
      this.namingSet = false;
      this.dialogservice.openMessageDialog('Nothing to export', false);
      return
    }

    this.addFonts.addArialFonts();
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "cm",
      format: [21, 29.7]
    });
    doc.setFont("helvetica","bold");
    doc.setFontSize(20);
    doc.text("Song Set", LeftMargin + 7.5,TopMargin);
    let seq=1;
    let vPos = TopMargin+1;
    for (let i=0; i<this.LocalRows.length; i++) {
      switch (this.LocalRows[i].SR_Type) {
        case "S":
          vPos += 0.4
          doc.setTextColor("Black");
          doc.setFont("helvetica",'normal','normal');
          doc.setFontSize(12);
          doc.text(" "+seq, LeftMargin,vPos)
          doc.setFontSize(16);
          doc.text(this.LocalRows[i].SR_Title+" - "+this.LocalRows[i].SR_MusicalKey, LeftMargin+0.8,vPos)
          doc.setFontSize(12);
          vPos+=0.6
          doc.text(this.LocalRows[i].SR_FirstLine, LeftMargin+2,vPos)
          vPos += 0.4
          seq+=1
          break;
        case "P":
          vPos += 0.4
          doc.setTextColor("Blue");
          doc.setFont("helvetica",'normal','normal');
          doc.setFontSize(12);
          doc.text(" "+seq, LeftMargin,vPos)
          doc.setFontSize(16);
          doc.text(this.LocalRows[i].SR_Title+" - "+this.LocalRows[i].SR_MusicalKey, LeftMargin+0.8,vPos)
          doc.setFontSize(12);
          vPos+=0.6
          doc.text(this.LocalRows[i].SR_FirstLine, LeftMargin+2,vPos)
          vPos += 0.4
          seq+=1
          break;
        case "L":
          doc.setTextColor("Black");
          doc.setFont("helvetica",'normal','normal');
          doc.setFontSize(8);
          doc.text(this.LocalRows[i].SR_Title, LeftMargin+0.8,vPos);
          doc.setFontSize(8);
          doc.text(this.LocalRows[i].SR_FirstLine, LeftMargin+10,vPos)
          vPos += 0.2
          break;
        case "A":
          doc.setFont("helvetica",'bold');
          doc.setFontSize(11);
          doc.text(this.setName + " am",LeftMargin+.5,vPos)
          seq=1;
          vPos += 0.4;
          break;
        case "B":
          vPos += 0.8
          doc.setFont("helvetica",'bold');
          doc.setFontSize(11);
          doc.text(this.setName + " pm",LeftMargin+.5,vPos)
          vPos += 0.4;
          seq=1;
          break;
        case "X":
          break;
      }
    }
    doc.save("setlist.pdf");

  }

<<<<<<< HEAD
  saveSet(newsetname: string) {
    this.namingSet = false;
    const songset: SongSet = {id:null, Leader: 'Mike', SetDate: newsetname, SetRows: []}
=======
  saveSet() {
>>>>>>> ac434a9 (SetSave)
    const max = this.LocalRows.length;
    if (max === 0){
      this.namingSet = false;
      this.dialogservice.openMessageDialog('Nothing to save', false);
      return
    }
    if (this.origName != this.setName)
    {
      this.currentId=null;
    }
    if (this.currentId) {
      this.dialogservice.openConfirmDialog('Update Set: '  + this.setName + ' ?')
      .afterClosed().subscribe(res => {
        if ( res === true ) {
          this.setsService.updateSet(this.currentId, this.leader, this.setName, this.LocalRows);
          this.dialogservice.openMessageDialog('Set updated successfully', true);
        }
      });
    } else {
      this.dialogservice.openConfirmDialog('Create Set: '  + this.setName + ' ?')
      .afterClosed().subscribe(res => {
        if ( res === true ) {
          this.setsService.addSet(null, this.leader, this.setName, this.LocalRows);
          this.dialogservice.openMessageDialog('New Set Created successfully', true);
          this.currentId = "Created";
        }
      });
    }
    this.origName = this.setName;
  }

  checkDelete(songset: SongSet) {
    this.dialogservice.openConfirmDialog('Delete Set: ' + songset.Leader + ' - ' + songset.SetDate + ' ?')
    .afterClosed().subscribe(res => {
      if ( res === true ) {
        this.setsService.deleteSet(songset.id);
      }
    });
  }

  writeSet(songset: SongSet){
    this.setsService.updateSet(songset.id, songset.Leader, songset.SetDate, songset.SetRows);
  }
  deleteSet(songset: SongSet) {
    this.setsService.deleteSet(songset.id);
  }

  ngOnDestroy() {
    this.songsSub.unsubscribe();
    this.setsSub.unsubscribe();
  }

}
