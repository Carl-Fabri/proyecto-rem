import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ConfirmPasswordValidator } from '../core/validators/confirm-password.validator';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  authService = inject(AuthService);
  _router = inject(Router);
  fb = inject(FormBuilder);

  errorMessage: string | null = null;
  hide = true;
  form : FormGroup;

  register() {
    if (this.form.invalid) return;
    this.authService.register(this.form.value).subscribe({
      next: (response)=> {
        if (response.statusCode == 201) {
          this._router.navigateByUrl('/login');
        }else if (response.statusCode == 400) {
          this.errorMessage = 'El email ya esta registrado';
        }else{
          this.errorMessage = 'Ocurrio un error';
        }
      },
      error: (error)=> {

      }
    }
  );
  }

  get registerFormControl() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(6)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },{
      validators: ConfirmPasswordValidator("password", "confirmPassword")
    });

  }

}
