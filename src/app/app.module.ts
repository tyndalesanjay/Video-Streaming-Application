import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchTrailersComponent } from './components/trailers/watch-trailers/watch-trailers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewTrailerComponent } from './view-trailer/view-trailer.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewAdminComponent,
    HeaderComponent,
    HomeComponent,
    ViewTrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
