import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  authService = inject(AuthService);
  _router = inject(Router);
  fb = inject(FormBuilder);

  hide = true;
  form! : FormGroup;

  login(){
    if (this.form.invalid) return;

    this.authService.login(this.form.value).subscribe({
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
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }
}
