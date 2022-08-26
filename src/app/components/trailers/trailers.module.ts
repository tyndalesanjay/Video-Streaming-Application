import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersComponent } from './trailers.component';
import { WatchTrailersComponent } from './watch-trailers/watch-trailers.component';


@NgModule({
  declarations: [
    TrailersComponent,
    WatchTrailersComponent
  ],
  imports: [
    CommonModule,
    TrailersRoutingModule
  ]
})
export class TrailersModule { }
