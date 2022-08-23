import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactTblRoutingModule } from './contact-tbl-routing.module';
import { ContactTblComponent } from './contact-tbl.component';


@NgModule({
  declarations: [
    ContactTblComponent
  ],
  imports: [
    CommonModule,
    ContactTblRoutingModule
  ]
})
export class ContactTblModule { }
