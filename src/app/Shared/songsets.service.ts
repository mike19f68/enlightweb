import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { SongSet, LocalRow } from './songset.model';

@Injectable({providedIn: 'root'})
export class SetsService {
  private songsets: SongSet[] = [];
  private setsUpdated = new Subject<SongSet[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getSets(leader: string) {
    const queryParams = `?Leader=${leader}`;
    this.http
      .get<{ message: string; songsets: any }>(
        'http://localhost:3000/api/songsets' + queryParams
      )
      .pipe(map((setData) => {
        return setData.songsets.map(songset => {
          return {
             id: songset._id,
             Leader: songset.Leader,
             SetDate: songset.SetDate,
             SetRows: songset.JsonSetRows
          };
        });
      }))
      .subscribe(transformedSets => {
      this.songsets = transformedSets;
      this.setsUpdated.next([...this.songsets]);
    });
  }

  findSet(leader: string, setName: string) {
    const queryParams = `?leader=${leader}&setDate=${setName}`;
    console.log('leader ' + leader + '; SetDate ' + setName);
    this.http
      .get<{ message: string; songsets: any }>(
        'http://localhost:3000/api/songsets/find' + queryParams
      )
      .pipe(map((setData) => {
        return setData.songsets.map(songset => {
          return {
            Leader: songset.Leader,
            SetDate: songset.SetDate,
            id: songset._id
          };
        });
      }))
      .subscribe(transformedSets => {
      this.songsets = transformedSets;
      this.setsUpdated.next([...this.songsets]);
    });
  }

  addSet(
    id: string,
    leader: string,
    setDate: string,
    setrows: LocalRow []
        ) {
    const songset: SongSet = {
      id: null,
      Leader: leader,
      SetDate: setDate,
      SetRows: setrows
    };
    this.http
      .post<{message: string, setId: string }>(
          'http://localhost:3000/api/songsets', songset
          )
      .subscribe(responseData => {
// tslint:disable-next-line: no-shadowed-variable
      const id = responseData.setId;
      songset.id = id;
      this.songsets.push(songset);
      this.setsUpdated.next([...this.songsets]);
    });
  }

  deleteSet(setId: string) {
    console.log('delete set Service: ' + setId);
    this.http.delete(
      'http://localhost:3000/api/songsets/' + setId
    )
    .subscribe(() => {
      const updatedsets = this.songsets.filter(songset => songset.id !== setId);
      this.songsets = updatedsets;
      this.setsUpdated.next([...this.songsets]);
    });
  }

  getSetUpdateListener() {
    return this.setsUpdated.asObservable();
  }
}

