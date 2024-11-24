import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject, Injectable } from '@angular/core';

import { AuthStateService } from '../../data-access/auth-state.service';
import { HyproyectionIdResponse, Hyproyections, HyproyectionsResponse } from '../interfaces/hypnoproyections';
import { map, Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';

@Injectable({
  providedIn: 'root'
})
export class HypnoproyectionsService {
  private auth = inject(AuthStateService);
  private token : string | null;
  private user_info : LoginRequest | null;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.user_info = this.auth.getSesstion()?.data.resource || null;
    this.token = this.auth.getToken();
  }

  public getHypnoproyectionsList(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    //! Cambiar Agregar la paginacion de hypnoproyecciones
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append('page', 1);
    // queryParams = queryParams.append('per_page', 5);

    // return this.http.get<HyproyectionsResponse>(`${this.apiUrl}/posts/all/`,{ headers, params: queryParams }).pipe(
    //   map(response => response.data.posts)
    // );

      return this.http.get<HyproyectionsResponse>(`${this.apiUrl}/posts/all/`,{ headers }).pipe(
      map(response => response.data.posts)
    );
  }

  public deleteHypnoProyection(postId:number): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<HyproyectionsResponse>(`${this.apiUrl}/posts/delete/`+postId,{ headers }).pipe(
      map(response => response.data.posts)
    );
  }

  public saveHypnoproyection(data: Partial<Hyproyections>): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<Hyproyections>(`${this.apiUrl}/posts/create`, data, { headers });
  }

  //! Cambiar Agregar la paginacion de hypnoproyecciones
  public getHypnoproyectionsByUser(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<HyproyectionsResponse>(`${this.apiUrl}/posts/get/`+this.user_info?.sub,{ headers }).pipe(
      map(response => response.data.posts)
    );
  }

  public updateHypnoproyection(data: Partial<Hyproyections>): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<Hyproyections>(`${this.apiUrl}/posts/update/`+data.id, data, { headers });
  }

  public getHypnoproyectionById(postId:number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<HyproyectionIdResponse>(`${this.apiUrl}/posts/get/`+postId,{ headers }).pipe(
      map(response => response.data)
    );
  }
}
