import path from "path";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { adminGuard } from "../shared/guards/admin.guard";

export default [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },

  {
    path: "aura-net",
    loadComponent: () => import("./aura-net/aura-net.component").then(m => m.AuraNetComponent),
  },

]
