import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  verificacionLogin(){
    console.log("Entro a la funcion");
    this.authService.login(this.email, this.password).then(res =>{
      this.router.navigate(['/chat']);
    }).catch(err => alert('Los datos son incorrectos o el usuario no existe'));
  }

  resetPassword() { 
    if (!this.email) { 
      alert('Type in your email first'); 
    }
    this.authService.resetPasswordInit(this.email) 
    .then(
      () => {
      this.router.navigate(['/home']);  
      alert('A password reset link has been sent to your email address'), 
      (rejectionReason) => alert(rejectionReason);
      
    }) 
    .catch(e => alert('An error occurred while attempting to reset your password')); 
  }
}
