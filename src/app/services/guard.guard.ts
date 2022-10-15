import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {
  realRole: string = "";

  constructor(private tokenService: TokenService, private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole:String[] = route.data['expectedRole'];
    const roles = this.tokenService.getAuthorities();
    this.realRole = "user";
    roles.forEach(rol => {
      if (rol == "ROLE_ADMIN") {
        this.realRole = "admin";
      }
    });
    if (!this.tokenService.getToken() || !(expectedRole.includes("admin"))) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
