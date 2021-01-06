import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { JwtToken } from '../model/jwt-token.model';

const TOKEN_KEY = 'acces_token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  public signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);  
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public isLoggedIn(): boolean {
    const user: JwtToken = this.getUser()
    if(user)
      return moment().isBefore(moment(user.exp));
    return false;
  }

  public getUser(): JwtToken {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}