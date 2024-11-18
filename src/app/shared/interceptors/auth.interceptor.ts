import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthStateService } from '../../data-access/auth-state.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next:  HttpHandlerFn
) => {

  const _authState = inject(AuthStateService);
  const token = _authState.getSesstion();
  const router = inject(Router);

  req = req.clone({
    setHeaders: {
      Authorization:  `Bearer ${token?.data.access_token}`,
    },
  });

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        _authState.signOut();
        router.navigateByUrl('login');
      }

      return throwError(()=> error);
    })
  );
};
