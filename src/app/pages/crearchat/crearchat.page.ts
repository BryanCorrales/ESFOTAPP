import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearchat',
  templateUrl: './crearchat.page.html',
  styleUrls: ['./crearchat.page.scss'],
})
export class CrearchatPage implements OnInit {
  public nombre: string;
  public detalle: string;
  public numero: number;
   
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  crearChat() {
    console.log("Entro a la funcion crear chat");
    this.numero=Math.floor(Math.random() * 8);
    console.log(this.numero)
    if ( this.numero == 0) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar1.jpg?alt=media&token=fba9404f-650a-4cf8-b3da-e66cf1b36d9c');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 1) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar2.jpg?alt=media&token=a6c7ad85-3d97-4b94-9113-9558c0cc48e70');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 2) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar3.jpg?alt=media&token=ad398472-3202-43ac-9505-a50511ff77a5');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 3) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar4.jpg?alt=media&token=5fda0f5e-811a-40fc-82f4-825bb308ddfb');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 4) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar5.jpg?alt=media&token=fafc5220-573a-49ea-b2e4-1ef347fc0f4c');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 5) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar6.jpg?alt=media&token=644c54e2-e5d0-4e74-b94f-06b0f67f6b06');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 6) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/avatar7.jpg?alt=media&token=3de6ef26-7f62-4a04-b795-2346535d47a5');
      this.router.navigate(['/chat']);
    }
    if ( this.numero == 7) {
      this.auth.registrarChat(this.nombre, this.detalle, 'https://firebasestorage.googleapis.com/v0/b/chat-b9b32.appspot.com/o/escudo.png?alt=media&token=f7339436-3e3e-4b0a-8518-a6a759299414');
      this.router.navigate(['/chat']);
    }
    
    
  }

}
