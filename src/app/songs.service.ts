import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Song } from './song.model';
import { templateJitUrl } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class SongsService {
  private songs: Song[] = [];
  private songsUpdated = new Subject<Song[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getSongs() {
    this.http
      .get<{ message: string; songs: any }>(
        'http://localhost:3000/api/songs'
      )
      .pipe(map((songData) => {
        return songData.songs.map(song => {
          return {
            SongRef: song.SongRef,
            SongTitle: song.SongTitle,
            FirstLine: song.FirstLine,
            Lyrics: song.Lyrics,
            Author: song.Author,
            CCLI_Ref: song.CCLI_Ref,
            Copyright: song.Copyright,
            PaceGrp: song.PaceGrp,
            Rating: song.Rating,
            LastPlay: song.LastPlay,
            MusicalKey: song.MusicalKey,
            Tempo: song.Tempo,
            id: song._id
          };
        });
      }))
      .subscribe(transformedSongs => {
        this.songs = transformedSongs;
        this.songsUpdated.next([...this.songs]);
      });
  }

  getSong(id: string) {
    return this.http
    .get<{ message: string; songs: any }>(
      'http://localhost:3000/api/songs'
      )
    .pipe(map((songData) => {
        return songData.songs.map(song => {
          return {
            SongRef: song.SongRef,
            SongTitle: song.SongTitle,
            FirstLine: song.FirstLine,
            Lyrics: song.Lyrics,
            Author: song.Author,
            CCLI_Ref: song.CCLI_Ref,
            Copyright: song.Copyright,
            PaceGrp: song.PaceGrp,
            Rating: song.Rating,
            LastPlay: song.LastPlay,
            MusicalKey: song.MusicalKey,
            Tempo: song.Tempo,
            id: song._id
          };
        });
      }))
      .subscribe(loadedSongs => {
        this.songs = loadedSongs;
        this.songsUpdated.next([...this.songs]);
    });
  }

  getSongUpdateListener() {
    return this.songsUpdated.asObservable();
  }

  addSong(
          id: string,
          songref: number,
          songtitle: string,
          firstline: string,
          lyrics: string,
          author: string,
          ccliref: string,
          copyright: string,
          pacegrp: string,
          rating: number,
          lastplay: Date,
          musicalkey: string,
          tempo: number ) {
    const song: Song = {
      id: null,
      SongRef: songref,
      SongTitle: songtitle,
      FirstLine: firstline,
      Lyrics: lyrics,
      Author: author,
      CCLI_Ref: ccliref,
      Copyright: copyright,
      PaceGrp: pacegrp,
      Rating: rating,
      LastPlay: lastplay,
      MusicalKey: musicalkey,
      Tempo: tempo
    };
    this.http
      .post<{message: string, songId: string }>(
          'http://localhost:3000/api/songs', song
          )
      .subscribe(responseData => {
        const id = responseData.songId;
        song.id = id;
        this.songs.push(song);
        this.songsUpdated.next([...this.songs]);
      });
    }
    deleteSong(songId: string) {
      this.http.delete(
        'http://localhost:3000/api/songs/' + songId
        )
        .subscribe(() => {
          const updatedsongs = this.songs.filter(post => post.id !== songId);
          this.songs = updatedsongs;
          this.songsUpdated.next([...this.songs]);
        });
    }
}
