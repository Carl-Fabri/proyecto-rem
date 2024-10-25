import { Component } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavbarComponent } from '../components/navbar/navbar.component';


@Component({
  selector: 'app-hypnoproyecciones',
  standalone: true,
  imports: [FontAwesomeModule,NavbarComponent],
  templateUrl: './hypnoproyecciones.component.html',
  styleUrl: './hypnoproyecciones.component.css'
})
export class HypnoproyeccionesComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
