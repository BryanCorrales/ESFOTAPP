import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {clsprofile} from '../../backend/clsprofile';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public nombre: string;
  public apellido: string;
  public tel: number;
  public URL: string;
  public image: string;

  clsprofile = {} as clsprofile;

  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  


  constructor( private auth: AuthService, private db: AngularFirestore, private authF: AngularFireAuth, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e){
    //console.log('subir', e.target.files[0]);
    const id= Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    console.log("Constante",file);
    const filePath = `Perfiles/profile_${id}`;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
      console.log("Imagen subida");
      const downloadURL = ref.getDownloadURL();
      downloadURL.subscribe(url=>{
        if(url){
          console.log(url);
          this.image = url;
        }
      })
    })
  }

  updateProfile(){
    this.authF.authState.subscribe(auth=>{

    this.db.collection('users').doc(auth.uid).update({nombre:this.nombre, 
      apellido: this.apellido, 
      telefono: this.tel,
      urlimage: this.image
      }).then(()=>{
        this.auth.isAuth().subscribe(user =>{
          if(user){
            user.updateProfile({
              displayName: this.nombre+" "+this.apellido,
              photoURL: this.image,
            }).then(function(){
              console.log('User Update');
                        
            }).catch(function(error){
              console.log('error',error);
            });
          }
        });
        this.router.navigate(['\chat']);
        
      }).catch(function(err){
        console.log(err);
      });
      

  })
}

}
