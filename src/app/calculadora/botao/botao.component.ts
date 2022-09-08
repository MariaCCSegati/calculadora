import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() valorBotao: string;
  @Output() clickBotao = new EventEmitter<string>();

  constructor() {
    this.valorBotao = "";
  }

  ngOnInit(): void {
  }

  clicou(){
    this.clickBotao.emit(this.valorBotao);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

