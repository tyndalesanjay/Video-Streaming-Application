import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchTrailersComponent } from '../trailers/watch-trailers/watch-trailers.component';
import { SearchResultsComponent } from './search-results.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'watch_trailers/:id', component: WatchTrailersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultsRoutingModule {}
