import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage : Storage | null = null;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this._storage = window.localStorage;
    }
  }
  private isLocalStorageAvailable(): boolean {
    return this._storage !== null;
  }

  get<T>(key: string):T | null {
    if (this.isLocalStorageAvailable()) {
      const value = this._storage!.getItem(key);
      if (!value) return null;

      return JSON.parse(value) as T ;
    }
      return null;
  }

  set<T>(key: string, value: T) {
    if (this.isLocalStorageAvailable()) {
      this._storage!.setItem(key,  JSON.stringify(value));
    }
  }

  remove(key: string) {
    if (this.isLocalStorageAvailable()) {
      this._storage!.removeItem(key);
    }
  }
}
