// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  private async isLoggedInAsync(): Promise<boolean> {
    try {
      const isLoggedIn = await this.keycloakService.isLoggedIn();
      return isLoggedIn;
    } catch (error) {
      console.error('Error checking authentication status:', error);
      // Handle the error as needed, e.g., redirect to an error page
      return false;
    }
  }

  canActivate(): Promise<boolean> {
    return this.isLoggedInAsync()
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      });
  }
  
}
