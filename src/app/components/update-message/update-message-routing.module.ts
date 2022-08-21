import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMessageComponent } from './update-message.component';

const routes: Routes = [{ path: '', component: UpdateMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMessageRoutingModule { }
