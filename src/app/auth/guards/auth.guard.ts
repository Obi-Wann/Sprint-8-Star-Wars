import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService,
                      private router:Router){}

  canActivate()  {
    // console.log('canActivate');
    if(this.authService.loginOk){
      return this.authService.loginOk  

    }
    return this.router.navigateByUrl('/auth')
  }

  canLoad()  {
    // console.log('canLoad');
    if(this.authService.loginOk){
      return this.authService.loginOk  

    }
    return this.router.navigateByUrl('/auth')
  }
  }

