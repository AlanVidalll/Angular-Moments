import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquim';
  /* Estamos passando isso via propriedade para o componente filho com a seguinte,
   sintaxe: [name] = 'userName', usaremos esse name no nosso componente filho para renderizar no HTML
   Exemplo : <app-parent-data [name] = 'userName'></app-parent-data> */

  userData = {
    email: 'joaquim.silva@gmail.com',
    role: 'Admin',
  };
  title = 'curso-angular-moments';
}
