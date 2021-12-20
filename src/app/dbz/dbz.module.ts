import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './mainPage/dbz.component';



@NgModule({
  declarations: [
    DbzComponent
  ],
  exports:[
    DbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
