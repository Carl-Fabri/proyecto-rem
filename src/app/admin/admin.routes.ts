import path from "path";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { adminGuard } from "../shared/guards/admin.guard";

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
