import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: ViewAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'upload', loadChildren: () => import('./components/uploads/uploads.module').then(m => m.UploadsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
