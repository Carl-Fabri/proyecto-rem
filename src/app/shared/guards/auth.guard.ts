import { Inject, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../../data-access/auth-state.service";



export const authGuard : CanActivateFn= (route,state) => {
  const _authState = inject(AuthStateService);
  const _router = inject(Router);
  const _session = _authState.getSesstion();

  if (_session) {
    _router.navigateByUrl('hypnoproyecciones');
    return false;
  }

  return true;
};

