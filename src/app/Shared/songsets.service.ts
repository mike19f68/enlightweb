<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { SongSet, LocalRow } from './songset.model';

@Injectable({providedIn: 'root'})
export class SetsService {
  private songsets: SongSet[] = [];
  private foundset: SongSet[] = [];

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
    this.http
    .get<{ message: string; foundset: any }>(
      'http://localhost:3000/api/songsets/find' + queryParams)
    .pipe(map((setData) => {
        console.log('We got this: ' + JSON.stringify(setData.foundset));
        return setData.foundset.map(songset => {
            return {
                id: songset._id,
                Leader: songset.Leader,
                SetDate: songset.SetDate,
                SetRows: songset.JsonSetRows
            }
        })
    }))            
    .subscribe(() => {
        const updatedsets = this.songsets.filter(songset => songset.id === songset.id );
        this.songsets = updatedsets;
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

=======
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
      const id = responseData.setId;
      songset.id = id;
      this.songsets.push(songset);
      this.setsUpdated.next([...this.songsets]);
    });
  }

  updateSet(
    id: string,
    leader: string,
    setDate: string,
    setrows: LocalRow []
        ) {
    const songset: SongSet = {
      id: id,
      Leader: leader,
      SetDate: setDate,
      SetRows: setrows
    };
    this.http
      .put<{message: string, setId: string }>(
          'http://localhost:3000/api/songsets/' + id, songset
          )
      .subscribe(responseData => {
      const id = responseData.setId;
      songset.id = id;
      this.songsets.push(songset);
      this.setsUpdated.next([...this.songsets]);
    });
  }

  deleteSet(setId: string) {
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

>>>>>>> ac434a9 (SetSave)
