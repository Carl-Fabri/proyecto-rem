import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthStateService } from "../../data-access/auth-state.service";
import { UserRole } from "../../core/interfaces/user-role";



// Estos elementos puedes volverlos clases independientes

export const privateGuard = (): CanActivateFn => {

  return  () => {
    const _authState = inject(AuthStateService);
    const _router = inject(Router);
    const _session = _authState.getSesstion();

    if(_session){
      return true;
    }else{
      _router.navigateByUrl('login');
    }

    return false;
  };
};

export const publicGuard = (): CanActivateFn => {

  return () => {
    const _authState = inject(AuthStateService);
    const _router = inject(Router);
    const _session = _authState.getSesstion();

    if (_session) {
      _router.navigateByUrl('hypnoproyecciones');
      return false;
    }

    return true;
  };
};

export const adminGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
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
