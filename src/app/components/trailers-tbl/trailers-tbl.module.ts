import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { TrailersTblRoutingModule } from './trailers-tbl-routing.module';
import { TrailersTblComponent } from './trailers-tbl.component';


@NgModule({
  declarations: [
    TrailersTblComponent
  ],
  imports: [
    CommonModule,
    TrailersTblRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class TrailersTblModule { }
