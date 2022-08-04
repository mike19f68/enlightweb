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

  getSets(leader: string) {
    const queryParams = `?Leader=${leader}`;
    this.http
      .get<{ message: string; sets: any }>(
        'http://localhost:3000/api/sets' + queryParams
      )
      .pipe(map((setData) => {
        return setData.sets.map(set => {
          return {
             id: set._id,
             Leader: set.Leader,
             SetDate: set.SetDate,
             setRows: set.JsonSetRows
          };
        });
      }))
      .subscribe(transformedSets => {
        this.sets = transformedSets;
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
          SetDate: string,
          setrows: SetRow[]
        ) {
    const set: Set = {
      id: null,
      Leader: leader,
      SetDate: SetDate,
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
          const updatedsets = this.sets.filter(post => post.id !== setId);
          this.sets = updatedsets;
          this.setsUpdated.next([...this.sets]);
        });
    }
}

