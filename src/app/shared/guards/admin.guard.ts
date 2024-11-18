import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthStateService } from '../../data-access/auth-state.service';

import { UserRole } from '../../core/interfaces/user-role';

/// Tarea: Ver diferencia entre esto y lo otro
export const adminGuard: CanActivateFn = (next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const authStateService = inject(AuthStateService);
  const router = inject(Router);

  const requiredRoles = next.data['roles'] as Array<string>;
  const userRoles = authStateService.getRole() as Array<UserRole>;

  console.log('requiredRoles', requiredRoles);
  if (!userRoles) {
    router.navigate(['/login']);
    return false;
  }

  if (userRoles && requiredRoles.some(role => userRoles.map(userRole => userRole.role_name).includes(role))) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};


// export const adminGuard: CanActivateFn = (
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean => {
//   const authStateService = inject(AuthStateService);
//   const router = inject(Router);

//   const requiredRoles = next.data['roles'] as Array<string>;
//   const userRoles = authStateService.getRole() as Array<UserRole>;

//   console.log('requiredRoles', requiredRoles);
//   if (!userRoles) {
//     router.navigate(['/login']);
//     return false;
//   }

//   if (userRoles && requiredRoles.some(role => userRoles.map(userRole => userRole.role_name).includes(role))) {
//     return true;
//   }

//   router.navigate(['/home']);
//   return false;
// };

