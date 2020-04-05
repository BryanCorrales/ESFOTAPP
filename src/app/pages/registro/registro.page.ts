import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  get emailv(){
    return this.registrationForm.get('emailv');
  }
  get passv(){
    return this.registrationForm.get('passv');
  }
  public errorMessages = {
    emailv : [
      {type: 'required', message: 'Email es requerido'},
      {type: 'pattern', message: 'Ingrese con el correo de la EPN'}
    ],
    passv : [
      {type: 'required', message: 'Email es requerido'},
      {type: 'minlength', message: 'Ingrese una contrasela'}
    ]
  }

  registrationForm = this.formBuilder.group({
    passv: ['', [Validators.required, Validators.minLength(5)]],
    emailv: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[epn]+(\\.[edu]+)*(\\.[ec]{2,4})$'), Validators.required])]
  });
  public nombre: string;
  public email: string;
  public pass: string;
  public URL: string;

  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private storage: AngularFireStorage) { }
  
  ngOnInit() {
  }
  ingresarUsuario(){
    console.log("Entro a ingresar usuario");
    this.auth.registrarUsu(this.email, this.pass).then((auth)=>{
      this.router.navigate(['/profile']);
      console.log(auth);
    }).catch(err =>console.log(err))
  }
  
 

}
