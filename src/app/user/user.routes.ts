import { Routes } from "@angular/router";
import { privateGuard } from "../shared/guards/private.guard";


export default [
  {
    path: "user-proyections",
    canActivate: [privateGuard],
    loadComponent: () =>
      import("../user/userproyections/userproyections.component").then(m => m.UserproyectionsComponent),
  },
  {
    path: "profile",
    canActivate: [privateGuard],
    loadComponent: () =>
      import("../user/user-details/user-details.component").then(m => m.UserDetailsComponent),
  },
  {
    path: 'make-dream',
    canActivate: [privateGuard],
    loadComponent: () => import('../make-dream/make-dream.component').then(m => m.MakeDreamComponent),
  }
] as Routes
