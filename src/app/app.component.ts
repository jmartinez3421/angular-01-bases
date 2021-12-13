import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string = 'Contador App';
  contador: number = 0;

  acumular(valor:number){
    this.contador += valor;
  }
}
