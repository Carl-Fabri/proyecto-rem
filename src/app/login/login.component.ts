import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  authService = inject(AuthService);
  _router = inject(Router);
  fb = inject(FormBuilder);
  errorMessage: string | null = null;
  form : FormGroup;
  hide = true;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  login(){
    if (this.form.invalid) return;

    this.authService.login(this.form.value).subscribe({
        next: (response)=> {
          if (response.statusCode == 200){
            this._router.navigateByUrl('hypnoproyecciones');
          }else if (response.statusCode == 401){
            this.errorMessage = 'Email o contraseña son incorrectos';
          }else{
            this.errorMessage = 'Ha ocurrido un error';
          }
        },
        error: (error)=> {
          this.errorMessage = 'Ha ocurrido un error';
        }
      }
    );
  }

  get formControl() {
    return this.form.controls;
  }
}
