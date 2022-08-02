import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Set, SetRow } from './set.model';

@Injectable({providedIn: 'root'})
export class SetsService {
  private sets: Set[] = [];
  private setsUpdated = new Subject<Set[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getSets() {
    this.http
      .get<{ message: string; sets: any }>(
        'http://localhost:3000/api/sets'
      )
      .pipe(map((setData) => {
        return setData.sets.map(set => {
          return {
            Leader: set.Leader,
            SetName: set.SetName,
            SetRows: [{
              SR_Type: set.Type,
              SR_Title: set.Title,
              SR_FirstLine: set.FirstLine,
              SR_MusicalKey: set.Key,
              SR_Ref: set.SongRef,
              SR_Lyrics: set.Lyrics,
              SR_Style: set.Style,
              id: set._id
            }]
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
            Leader: set.Leader,
            SetName: set.SetName,
            SetRows: [{
              SR_Type: set.Type,
              SR_Title: set.Title,
              SR_FirstLine: set.FirstLine,
              SR_MusicalKey: set.Key,
              SR_Ref: set.SongRef,
              SR_Lyrics: set.Lyrics,
              SR_Style: set.Style,
              id: set._id
            }]

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
/* below split to add parent + add children ??*/
/*   addSet(
          id: string,
          leader: string,
          setname: string,
          setrows: SetRow[]
        ) {
    const set: Set = {
      id: null,
      Leader: leader,
      SetName: setname,
      SetRow: setrows
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
    } */

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

