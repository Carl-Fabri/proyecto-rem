import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { Hyproyections } from '../../core/interfaces/hypnoproyections';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { HypnoproyectionsService } from '../../core/service/hypnoproyections.service';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-hypnoproyection',
  standalone: true,
  imports: [MatFormField,ReactiveFormsModule,MatDialogContent,MatDialogTitle,MatFormFieldModule,MatButton,MatDialogActions,MatLabel,MatError,MatFormFieldModule,MatInputModule,CommonModule],
  templateUrl: './edit-hypnoproyection.component.html',
  styleUrl: './edit-hypnoproyection.component.css'
})
export class EditHypnoproyectionComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditHypnoproyectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hyproyections,
    private fb: FormBuilder,
    private hypnoproyectionsService: HypnoproyectionsService
  ) {
    this.form = this.fb.group({
      name: [data.name, Validators.required],
      message: [data.message, Validators.required],
      tags: [data.tags.join(', '), Validators.required]
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const updatedHypnoproyeccion: Hyproyections = {
        ...this.data,
        name: formValue.name,
        message: formValue.message,
        tags: formValue.tags.split(',').map((tag: string) => tag.trim())
      };

      this.hypnoproyectionsService.updateHypnoproyection(updatedHypnoproyeccion).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
