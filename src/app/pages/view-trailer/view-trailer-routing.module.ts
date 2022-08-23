import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTrailerComponent } from './view-trailer.component';

const routes: Routes = [{ path: '', component: ViewTrailerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTrailerRoutingModule { }
