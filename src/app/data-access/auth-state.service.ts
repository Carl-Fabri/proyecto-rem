import { inject, Injectable } from '@angular/core';
import { StorageService } from '../shared/data-access/storage.service';
import { DataAuth } from '../core/interfaces/data-auth';
import { AuthResponse } from '../core/interfaces/auth-response';
import { UserRole } from '../core/interfaces/user-role';
import { LoginRequest } from '../core/interfaces/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private _storageService = inject(StorageService);
  private roleAs = String;


  getUserInfo(): { info: LoginRequest } | null {
    const session = this.getSesstion();
    return session ? { info: session.data.resource } : null;
  }

  getSesstion(): AuthResponse | null {
    let currentSession: AuthResponse | null = null;
    const maybeSession = this._storageService.get<AuthResponse>('session');

    if (maybeSession !== null) {
      if (this._isValidSession(maybeSession)) {
        currentSession = maybeSession;
      }else{
        this.signOut();
      }
    }

    return currentSession;
  }

  isLoggedIn(): boolean {
    const session = this._storageService.get<AuthResponse>('session');
    return session !== null;
   }

  signOut(){
    this._storageService.remove('session');
  }

  getRole():UserRole[] | null  {
    const session = this.getSesstion()?.data.resource.roles;
    return session ? session : null;
  }

  private _isValidSession(maybeSession : AuthResponse): boolean{
    return(
      typeof maybeSession === 'object' &&
      maybeSession !== null &&
      'access_token' in maybeSession.data
    );
  }

}
