import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './mainPage/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajeComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
