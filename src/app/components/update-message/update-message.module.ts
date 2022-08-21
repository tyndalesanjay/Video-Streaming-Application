import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMessageRoutingModule } from './update-message-routing.module';
import { UpdateMessageComponent } from './update-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UpdateMessageComponent
  ],
  imports: [
    CommonModule,
    UpdateMessageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class UpdateMessageModule { }
