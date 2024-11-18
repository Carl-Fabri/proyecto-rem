import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../../data-access/auth-state.service';


export const privateGuard: CanActivateFn = (route, state) => {
  const _authState = inject(AuthStateService);
  const _router = inject(Router);
  const _session = _authState.getSesstion();

  if(_session){
    return true;
  }else{
    _router.navigateByUrl('login');
    return false;
  }

  return false;
};
