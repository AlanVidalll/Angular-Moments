import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // Isso e a propriedade recebida com nome de name do componente pai, podeusar ela agora nosso html
  @Input() userData!: { email: string; role: string }; // Com exclamação seria mesma coisa que inicia o dado vazio igual feito acima com name
  constructor() {}

  ngOnInit(): void {}
}
