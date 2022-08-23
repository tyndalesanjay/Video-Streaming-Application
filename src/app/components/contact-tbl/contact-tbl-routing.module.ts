import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactTblComponent } from './contact-tbl.component';

const routes: Routes = [{ path: '', component: ContactTblComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactTblRoutingModule { }
