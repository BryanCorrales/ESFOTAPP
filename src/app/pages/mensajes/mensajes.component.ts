import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {clsmensaje} from '../../backend/clsmensaje';
import {ReadchatsService} from '../../servicios/readchats.service';
import {AuthService} from '../../servicios/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

interface usuarioss{
    uid: string,
    nombre: string
}
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
})

export class MensajesComponent implements OnInit {
  public chats: any;
  public usuarios : any =[];
  public uid: string;
  public sms: clsmensaje;
  public room: any;
  public nombre: string;
  public mens: string;
  
  constructor(private navparame: NavParams, private modal :ModalController, private chatService: ReadchatsService,
    private AuthService: AuthService, private AngularFire: AngularFireAuth) { }

  ngOnInit() {
    this.chats=this.navparame.get('chat');
    this.chatService.getChatRoom(this.chats.id).subscribe(room =>{
      console.log(room);
      this.room=room;
    })
    this.obtenerUu();
  }
    obtenerUu(){
      this.AngularFire.authState.subscribe(user=>{
        this.AuthService.obtenernombreUsuario(user.uid).subscribe(usa =>{
          const data2 : usuarioss = usa.payload.data() as usuarioss;
          this.nombre= data2.nombre;
          console.log("Este es el nombre :"+this.nombre)
        });
      })
      
    }


  cerrarChat(){
    this.modal.dismiss();
  }
  enviarsms(){
    const mensaje : clsmensaje ={
      nombre: this.nombre,
      textosms: this.mens,
      type:'text',
      date : new Date()
    }
    this.chatService.sendsmsFire(mensaje, this.chats.id);
    this.mens="";
  }

}
