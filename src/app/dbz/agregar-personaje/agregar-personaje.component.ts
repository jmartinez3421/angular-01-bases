import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent{
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input() personajes: Personaje[] = [];

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};
  }
}
