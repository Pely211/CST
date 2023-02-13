import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RpgGuardGuard implements CanActivate, CanActivateChild {
  isLoggedIn = false;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
  
}
