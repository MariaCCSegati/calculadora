import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ultimaResp = '0';
  controle = '';
  controleValores = '';

  Igual(){
    this.controle = (eval(this.controleValores)) + '';
    this.controleValores = (eval(this.controleValores)) + '';

    if(this.controleValores == undefined){
      this.controleValores = '';
      this.controle = '';
    }

    this.ultimaResp = this.controle;
  }

  calcular(evento : any){
    
    if(evento == '='){
      this.Igual();
    } else {
      this.controle = this.controle + evento;
      this.controleValores = this.controleValores + evento;
    }
  }
}
