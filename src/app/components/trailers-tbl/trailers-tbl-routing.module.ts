import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailersTblComponent } from './trailers-tbl.component';

const routes: Routes = [{ path: '', component: TrailersTblComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailersTblRoutingModule { }
