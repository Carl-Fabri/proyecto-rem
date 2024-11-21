import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
import { matchPassword } from '../core/validators/match-password.validator';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  authService = inject(AuthService);
  _router = inject(Router);
  fb = inject(FormBuilder);

  hide = true;
  form! : FormGroup;

  register() {
    if (this.form.invalid) return;
    this.authService.register(this.form.value).subscribe({
      next: (response)=> {
        this._router.navigateByUrl('hypnoproyecciones');
      },
      error: (error)=> {
        console.log('Login error');
      }
    }
  );

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },{
      validator: matchPassword
    });

  }

}
