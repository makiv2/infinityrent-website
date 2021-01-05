import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../model/register.model';

const AUTH_API = 'http://localhost:8080/api/auth/'; //TODO:fix

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    //TODO:fix
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
    });
  }

  register(model: Register): Observable<any> {
    return this.http.post(AUTH_API + 'signup', model);
  }
}
