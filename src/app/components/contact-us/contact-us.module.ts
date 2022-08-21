import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class ContactUsModule { }
