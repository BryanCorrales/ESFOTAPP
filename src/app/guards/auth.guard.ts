import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private AFauth: AngularFireAuth, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise <boolean> | boolean{
    
    return this.AFauth.authState.pipe(map(auth =>{
      console.log(auth)
      
      if(isNullOrUndefined(auth)){
        this.router.navigate(['/home']);
        return false;
      }else{
        var authe=auth;
        var veri= authe.emailVerified;
        if(veri==true){
          return true;
        }else{
          this.router.navigate(['/home']);
          return false;
        }
      
      }
      
    }))

   
  }
  
  
}
