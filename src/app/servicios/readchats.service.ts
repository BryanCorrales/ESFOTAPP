import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import{clsmensaje} from '../backend/clsmensaje';
import {firestore} from 'firebase';
export interface chat {
  descripcion: string
  nombre: string
  id: string
  img: string
} 
@Injectable({
  providedIn: 'root'
})
export class ReadchatsService {

  constructor(private db: AngularFirestore) {
   }

  getChats(){
    return this.db.collection('chats').snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data =a.payload.doc.data() as chat;
        data.id= a.payload.doc.id;
        return data;
      })
    }));
  }

  getChatRoom(idchat: string){
    return this.db.collection('chats').doc(idchat).valueChanges();
  }

  sendsmsFire(mensaje : clsmensaje, idchat : string){
    this.db.collection('chats').doc(idchat).update({
      mensajes: firestore.FieldValue.arrayUnion(mensaje),
    })
  }
}
