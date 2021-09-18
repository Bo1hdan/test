import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpiderManComponent } from '../spider-man/spider-man.component';
import { ThorComponent } from '../thor/thor.component';



@NgModule({
  declarations: [
    SpiderManComponent,
    ThorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarvelModule { }
