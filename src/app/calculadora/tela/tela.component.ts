import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {

  @Input() valorTela:string;

  constructor() { 
    this.valorTela = '';
  }

  ngOnInit(): void {
  }

}
