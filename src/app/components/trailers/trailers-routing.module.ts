import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailersComponent } from './trailers.component';
import { WatchTrailersComponent } from './watch-trailers/watch-trailers.component';

const routes: Routes = [
  { path: '', component: TrailersComponent },
  { path: 'watch_trailers/:id', component: WatchTrailersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailersRoutingModule { }
