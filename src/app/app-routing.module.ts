import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: ViewAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'upload', loadChildren: () => import('./components/uploads/uploads.module').then(m => m.UploadsModule) },
  { path: 'contact', loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'updateMessage/:id', loadChildren: () => import('./components/update-message/update-message.module').then(m => m.UpdateMessageModule) },
  { path: 'trailers', loadChildren: () => import('./components/trailers/trailers.module').then(m => m.TrailersModule) },
  { path: 'search/:key', loadChildren: () => import('./components/search-results/search-results.module').then(m => m.SearchResultsModule) },
  { path: 'contact_tbl', loadChildren: () => import('./components/contact-tbl/contact-tbl.module').then(m => m.ContactTblModule) },
  { path: 'trailers_tbl/:id', loadChildren: () => import('./components/trailers-tbl/trailers-tbl.module').then(m => m.TrailersTblModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
