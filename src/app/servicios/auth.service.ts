import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import{AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private usuid:string;

  constructor(private AFauth: AngularFireAuth, private router : Router, private db :AngularFirestore) { }

  login(usuario:string, password:string){
    return new Promise((resolve, rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(usuario, password).then( user=>{
        this.AFauth.auth.onAuthStateChanged(function(userv){
          var emailVerificado= userv.emailVerified;
          if(emailVerificado==true){
            resolve(user)
            console.log("Email verificado");
          }else{
            console.log("Email no verificado ")
          }
        })
      }).catch(err=> rejected(err));
    })
    
  }
  obtenernombreUsuario(uid: string){
    return this.db.collection('users').doc(uid).snapshotChanges();
  }


  logout(){
    this.AFauth.auth.signOut().then(auth=>{
      this.router.navigate(['/home']);
    })
  }
  registrarChat(nombre:string, detalle: string, img:string){
    
    this.db.collection('chats').add({
        nombre: nombre,
        descripcion: detalle,
        img:img
    })
  }

  registrarUsu(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email,pass).then(res=>{
        //console.log(res.user.uid);
        const uid= res.user.uid;
        this.db.collection('users').doc(res.user.uid).set({
          uid: uid,
          correo: email
        })
        this.verificacionUsuario();
        this.AFauth.auth.onAuthStateChanged(function(userv){
          var emailVerificado= userv.emailVerified;
          if(emailVerificado==true){
            resolve(res);
            console.log("Email verificado");
          }else{
            console.log("Email no verificado");
          }
        })
        
      }).catch(err=>reject(err));
    })
    
  }
  verificacionUsuario(){
    var user = this.AFauth.auth.currentUser;
    user.sendEmailVerification().then(function(){
      console.log("Correo enivado");
    }).catch(function(error){
      console.log("Correo no enviado");
    });

  }

  resetPasswordInit(email: string) { 
    return this.AFauth.auth.sendPasswordResetEmail(
      email); 
    } 
  isAuth(){
    return this.AFauth.authState.pipe(map(auth=>auth));
  }



}
