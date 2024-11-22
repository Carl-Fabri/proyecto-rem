import { Component, inject } from '@angular/core';
import { HypnoproyectionsService } from '../core/service/hypnoproyections.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hyproyections } from '../core/interfaces/hypnoproyections';
import { Router } from '@angular/router';


@Component({
    selector: 'app-make-dream',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './make-dream.component.html',
    styleUrl: './make-dream.component.css'
})
export class MakeDreamComponent {
  hypnoproyectionService = inject(HypnoproyectionsService);
  _router = inject(Router);
  form! : FormGroup;

  constructor(
    private fb: FormBuilder,
    private hypnoproyectionsService: HypnoproyectionsService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      tags: ['', Validators.required]
      // Otros campos que necesites
    });
  }


    saveHypnoproyection() : void {

      if (this.form.valid) {
        console.log('wdwdwd');
        const formValue = this.form.value;
        const dream : Partial<Hyproyections> = {
          name: formValue.title,
          message: formValue.message,
          tags: formValue.tags.split(',').map((tag: string) => tag.trim())
        };
        this.hypnoproyectionService.saveHypnoproyection(dream).subscribe({
            next: (response)=> {
              console.log(response);
            },
            error: (error)=> {
              console.log('Hypnoproyection error');
            }
          }
        );
      }
    }

}
