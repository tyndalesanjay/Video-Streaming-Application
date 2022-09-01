import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersComponent } from './trailers.component';
import { WatchTrailersComponent } from './watch-trailers/watch-trailers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TrailersComponent,
    WatchTrailersComponent
  ],
  imports: [
    CommonModule,
    TrailersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class TrailersModule { }
