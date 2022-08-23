import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersTblRoutingModule } from './trailers-tbl-routing.module';
import { TrailersTblComponent } from './trailers-tbl.component';


@NgModule({
  declarations: [
    TrailersTblComponent
  ],
  imports: [
    CommonModule,
    TrailersTblRoutingModule
  ]
})
export class TrailersTblModule { }
