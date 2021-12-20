import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)='acumular(base)' >+{{base}}</button>
        <h2> {{contador}} </h2>
        <button (click)='acumular(-base)'>-{{base}}</button>
    `
})
export class ContadorComponent {
    title   : string = 'Contador App';
    contador: number = 0;
    base    : number = 5;
  
    acumular(valor:number){
      this.contador += valor;
    }
}
