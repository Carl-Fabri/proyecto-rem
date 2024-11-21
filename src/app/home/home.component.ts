import { Component, Directive, inject, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AuthStateService } from '../data-access/auth-state.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CdkAccordionModule, CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  authStateService = inject(AuthStateService);


  isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authStateService.isLoggedIn();
  }
  closeSession() {
    this.authStateService.signOut();
    window.location.reload();
  }

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
