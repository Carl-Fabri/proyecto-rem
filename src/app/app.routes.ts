import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HypnoproyeccionesComponent } from './hypnoproyecciones/hypnoproyecciones.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { privateGuard } from './shared/guards/private.guard';
import { authGuard } from './shared/guards/auth.guard';
import { adminGuard } from './shared/guards/admin.guard';

export const routes: Routes = [

  //Default routes

  {
    path: '',
    component : UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'home',
        component: HomeComponent,
         pathMatch: 'full'
      },
      {
        path: 'hypnoproyecciones',
        canActivate: [privateGuard],
        component: HypnoproyeccionesComponent
      },
    ],
  },
  {
    path: 'login',
    canActivate: [authGuard],
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },

  //Auth routes
  {
    path: 'register',
    canActivate: [authGuard],
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'presentation',
    canActivate: [authGuard],
    loadComponent: () => import('./presentation-page/presentation-page.component').then(m => m.PresentationPageComponent),
  },

  //User routes
  {
    path: 'user',
    canActivate: [privateGuard],
    component: UserLayoutComponent,
    loadChildren: () => import('./user/user.routes')
  },


  //Admin routes
  {
    path: 'admin',
    canActivate: [adminGuard],
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.routes'),
    data: {
      roles: ['admin']
    }
  },
];
