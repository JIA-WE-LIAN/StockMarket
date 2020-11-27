import { UserStoreService } from './../services/user-store.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStoreService: UserStoreService,
              private router: Router) { }

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');

    if (this.userStoreService.isLoggedIn()) { return true; }

    console.log('AuthGuard#canActivate not authorized to acess page');

    this.router.navigate(['login']);
    return false;
  }

}
