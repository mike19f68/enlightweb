import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-build-set',
  templateUrl: './build-set.component.html',
  styleUrls: ['./build-set.component.css']
})
export class BuildSetComponent implements OnInit {

  songToSendP: Song;
  @Input() receivedC: Song;

  constructor() { }

  ngOnInit(): void {
  }

  receiveSong(song: Song) {
    this.receivedC = song;
  }

}
