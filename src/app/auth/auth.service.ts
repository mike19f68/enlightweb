import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { DialogService } from '../Shared/dialog.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private leader: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialogservice: DialogService) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getLeader() {
    return this.leader;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string, leader: string) {
    const authData: AuthData = { email: email, password: password, leader: leader};
    this.http
      .post('http://localhost:3000/api/user/signup', authData)
      .subscribe(() => {
        this.dialogservice.openMessageDialog('User Created Successfully', true);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  login(email: string, password: string, leader: string) {
    const authData: AuthData = { email: email, password: password, leader: leader };
    this.http
      .post<{ token: string; expiresIn: number; userId: string; leader: string}>(
        'http://localhost:3000/api/user/login',
        authData
      )
      .subscribe(response => {
        const token = response.token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.leader = response.leader;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, email, this.leader);
          this.router.navigate(['/BuildSet']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.leader = localStorage.getItem('leader');
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.leader = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/Login']);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, leader: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('leader', leader);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('leader');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const leader = localStorage.getItem('leader');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      leader: leader
    };
  }
}
