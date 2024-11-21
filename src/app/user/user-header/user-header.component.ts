import { ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { AuthStateService } from '../../data-access/auth-state.service';
import { CommonModule } from '@angular/common';
import { map, Observable, of } from 'rxjs';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderNavService } from './header-nav.service';
import {MatMenuTrigger, MatMenu} from '@angular/material/menu';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,RouterLink, MatToolbarModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule,RouterLinkActive,MatMenuTrigger,MatMenu],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(library: FaIconLibrary, private headerSide: HeaderNavService,private router: Router) {
    library.addIconPacks(fas, far, fab);
  }

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

  toggleMenu() {
    this.headerSide.toggle();
  }

  isActive(url: string): boolean { return this.router.url === url; }
}
