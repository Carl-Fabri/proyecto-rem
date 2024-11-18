import { Component, inject, OnInit } from '@angular/core';
import { AuthStateService } from '../../data-access/auth-state.service';
import { CommonModule } from '@angular/common';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit{
  authStateService = inject(AuthStateService);
  isAuthenticated$: Observable<boolean>;
  isNotAuthenticated$: Observable<boolean>;

  ngOnInit(): void {
    this.isAuthenticated$ = of(this.authStateService.isLoggedIn());
    this.isNotAuthenticated$ = this.isAuthenticated$.pipe(map(isAuthenticated => !isAuthenticated));
  }
  closeSession() {
    this.authStateService.signOut();
    window.location.reload();
  }

}
