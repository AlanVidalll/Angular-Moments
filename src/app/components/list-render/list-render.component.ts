import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'Tuca',
      type: 'Dog',
      age: 8,
    },
    {
      name: 'Jerry',
      type: 'Cat',
      age: 5,
    },
    {
      name: 'Nina',
      type: 'Dog',
      age: 10,
    },
    {
      name: 'Bob',
      type: 'Horse',
      age: 6,
    },
  ];


  animal: Animal = 
    {
      name: 'Pernalonga',
      type: 'Coelho',
      age: 8,
    }
    
 

  animalDetails = ''

  constructor() {}

  ngOnInit(): void {}
  showAge(animal: Animal) { this.animalDetails = `O animal ${animal.name} tem a idade de: ${animal.age}`}
}
