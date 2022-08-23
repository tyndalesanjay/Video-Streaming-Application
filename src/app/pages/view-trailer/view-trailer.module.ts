import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTrailerRoutingModule } from './view-trailer-routing.module';
import { ViewTrailerComponent } from './view-trailer.component';


@NgModule({
  declarations: [
    ViewTrailerComponent
  ],
  imports: [
    CommonModule,
    ViewTrailerRoutingModule
  ]
})
export class ViewTrailerModule { }
