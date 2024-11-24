import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HypnoproyectionsService } from '../core/service/hypnoproyections.service';
import { Hyproyections } from '../core/interfaces/hypnoproyections';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hypnoproyection-detail',
  imports: [CommonModule],
  templateUrl: './hypnoproyection-detail.component.html',
  styleUrl: './hypnoproyection-detail.component.css'
})
export class HypnoproyectionDetailComponent {
  hypnoproyectionId: number | null;
  hypnoproyectionApi = inject(HypnoproyectionsService);
  hypnoproyection: Hyproyections | null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.hypnoproyectionId = idParam ? +idParam : null;

    if (this.hypnoproyectionId === null || isNaN(this.hypnoproyectionId)) {
      this.router.navigate(['/']); // Redirigir a otra página si el parámetro es nulo o no válido
      return;
    }

    this.hypnoproyectionApi.getHypnoproyectionById(this.hypnoproyectionId).subscribe(data => {
      this.hypnoproyection = data;
    });
  }
}
