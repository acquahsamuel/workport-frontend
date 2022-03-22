import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
// import { StateStorageService } from './state-storage.service';

/**
 * An authentication guard class heping the router module decide on
 * which pages the user can navigate to or not.
 *
 */
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    // private stateStorageService: StateStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //configure auth guard
    return true;
  }
}
