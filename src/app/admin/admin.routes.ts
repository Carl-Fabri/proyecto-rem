import path from "path";
import { adminGuard } from "../shared/guards/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";

export default [

  {
    path: 'dashboard',
    canActivate: [adminGuard],
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: {
      roles: ['admin']
    }
  },

  {
    path: "aura-net",
    canActivate: [adminGuard],
    loadComponent: () => import("./aura-net/aura-net.component").then(m => m.AuraNetComponent),
    data: {
      roles: ['admin']
    }
  },

]
