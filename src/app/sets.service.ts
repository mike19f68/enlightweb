import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Set } from './set.model';

@Injectable({providedIn: 'root'})
export class SetsService {
  private sets: Set[] = [];
  private setsUpdated = new Subject<Set[]>();
  private setId: string;

  constructor(private http: HttpClient, private router: Router) {}

  getSets() {

    this.http
      .get<{ message: string; sets: any }>(
        'http://localhost:3000/api/sets'
      )
      .pipe(map((setData) => {
        return setData.sets.map(set => {
          return {
            SetName: set.SetName,
            Seq: set.Seq,
            Title: set.Title,
            FirstLine: set.FirstLine,
            Key: set.Key,
            SongRef: set.SongRef,
            Lyrics: set.Lyrics,
            Style: set.Style,
            id: set._id
          };
        });
      }))
      .subscribe(transformedSets => {
        this.sets = transformedSets;
        this.setsUpdated.next([...this.sets]);
      });
  }

  getSet(id: string) {
    return this.http
    .get<{ message: string; sets: any }>(
      'http://localhost:3000/api/sets'
      )
    .pipe(map((setData) => {
        return setData.sets.map(set => {
          return {
            SetName: set.SetName,
            Seq: set.Seq,
            Title: set.Title,
            FirstLine: set.FirstLine,
            Key: set.Key,
            SongRef: set.SongRef,
            Lyrics: set.Lyrics,
            Style: set.Style,
            id: set._id
          };
        });
      }))
      .subscribe(loadedSets => {
        this.sets = loadedSets;
        this.setsUpdated.next([...this.sets]);
    });
  }

  getSetUpdateListener() {
    return this.setsUpdated.asObservable();
  }

  addSet(
          id: string,
          setname: string,
          seq: string,
          title: string,
          firstline: string,
          key: string,
          songref: number,
          lyrics: string,
          style: string ) {
    const set: Set = {
      id: null,
      SetName: setname,
      SetRow: {
        Seq: seq,
        Title: title,
        FirstLine: firstline,
        Key: key,
        SongRef: songref,
        Lyrics: lyrics,
        Style: style
      }

    };
    this.http
      .post<{message: string, setId: string }>(
          'http://localhost:3000/api/sets', set
          )
      .subscribe(responseData => {
        // tslint:disable-next-line: no-shadowed-variable
        const id = responseData.setId;
        set.id = id;
        this.sets.push(set);
        this.setsUpdated.next([...this.sets]);
      });
    }

    deleteSet(setId: string) {
      this.http.delete(
        'http://localhost:3000/api/sets/' + setId
        )
        .subscribe(() => {
          console.log(setId);
          const updatedsets = this.sets.filter(post => post.id !== setId);
          this.sets = updatedsets;
          this.setsUpdated.next([...this.sets]);
        });
    }
}

