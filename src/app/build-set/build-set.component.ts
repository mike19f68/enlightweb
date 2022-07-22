import { Component, OnInit, Input, Output } from '@angular/core';
import { Song } from '../song.model';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-build-set',
  templateUrl: './build-set.component.html',
  styleUrls: ['./build-set.component.css']
})
export class BuildSetComponent implements OnInit {
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService) {}


  songToSendP: Song;
  @Input() receivedC: Song;


  ngOnInit(): void {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe();
  }

  receiveSong(song: Song) {
    this.receivedC = song;
  }

}
