import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkAccordionModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
