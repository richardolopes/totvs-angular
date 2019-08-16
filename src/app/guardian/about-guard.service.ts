import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutGuardService implements CanActivate {

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    this.route.navigate(['login']);
    return false;
  };
}
