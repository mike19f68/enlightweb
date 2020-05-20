import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongsService } from '../songs.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent {
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

}
