import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRequest } from '../interfaces/login-request';
import { AuthResponse } from '../interfaces/auth-response';

import { StorageService } from '../../shared/data-access/storage.service';
import { RegisertRequest } from '../interfaces/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';
  private _storage = inject(StorageService);

  constructor(private http: HttpClient) { }

  login(data:LoginRequest):Observable<AuthResponse> {
    return this.http
    .post<AuthResponse>(`${this.apiUrl}/auth/login`,data)
      .pipe(
        tap((Response)=>{
          if(Response.success){
            this._storage.set('session', Response);
          }
        })
    );
  }

  register(data:RegisertRequest):Observable<AuthResponse> {
    return this.http
    .post<AuthResponse>(`${this.apiUrl}/auth/register`,data)
      .pipe(
        tap((Response)=>{
          if(Response.success){
            this._storage.set('session', Response);
          }
        })
    );
  }
}
