import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../servicios/auth.service';
import{ReadchatsService} from '../../servicios/readchats.service';
import {ModalController} from '@ionic/angular';
import {MensajesComponent} from '../mensajes/mensajes.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public chatsR : any =[];
  constructor(public Authservicies: AuthService, public chatservice: ReadchatsService,private modal:ModalController ) { }

  ngOnInit() {
    this.chatservice.getChats().subscribe( chats=>{
      this.chatsR= chats;
    });
    
  }


  SingOut(){
    this.Authservicies.logout();
  }

  AbrirChat(chat){
    this.modal.create({
      component: MensajesComponent, 
      componentProps :{
        chat : chat
      }
    }).then((modal)=> modal.present());
  }


}
