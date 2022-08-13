import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadsComponent } from './uploads.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadsComponent,
  ],
  imports: [
    CommonModule,
    UploadsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UploadsModule { }
