import { Routes } from '@angular/router';
import path from 'path';
import { HypnoproyeccionesComponent } from './hypnoproyecciones/hypnoproyecciones.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MakeDreamComponent } from './make-dream/make-dream.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: '',component : HomeComponent},
  {path: 'hypnoproyecciones',component : HypnoproyeccionesComponent},
  {path: 'login',component : LoginComponent},
  {path: 'make-dream',component : MakeDreamComponent},
  {path: 'presentation',component : PresentationPageComponent},
  {path: 'register', component: RegisterComponent}
];
