import { Component, inject } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HypnoproyectionsService } from '../core/service/hypnoproyections.service';
import { Hyproyections } from '../core/interfaces/hypnoproyections';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-hypnoproyecciones',
    standalone: true,
    imports: [FontAwesomeModule,CommonModule, RouterLink],
    templateUrl: './hypnoproyecciones.component.html',
    styleUrl: './hypnoproyecciones.component.css'
})
export class HypnoproyeccionesComponent {
  hypnoproyectionList: Hyproyections[] = [];
  hypnoproyectionApi = inject(HypnoproyectionsService);

  constructor(library: FaIconLibrary) {
    this.hypnoproyectionApi.getHypnoproyectionsList().subscribe((data) => {
      this.hypnoproyectionList = data.filter(item => item.status === true);
    });

    library.addIconPacks(fas, far, fab);
  }
}
