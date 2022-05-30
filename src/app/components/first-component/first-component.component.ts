import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
 name: string = 'Alan Vidal'
 age:number= 32
 job:string = 'Programador'
 hobbies = ['Estudar', 'Correr', 'Jogar']
 car = {
   name: 'Ferrari',
   color: 'Red',
   price: '$ 250.000.00'
 }

  constructor() { }

  ngOnInit(): void {
  }

}
