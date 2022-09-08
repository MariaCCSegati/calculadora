import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TelaComponent } from './calculadora/tela/tela.component';
import { BotaoComponent } from './calculadora/botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    TelaComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
