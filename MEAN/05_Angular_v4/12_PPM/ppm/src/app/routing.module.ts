import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpmHomeComponent } from './ppm-home/ppm-home.component';
import { PpmViewListComponent } from './ppm-view-list/ppm-view-list.component';
import { PpmCreateComponent } from './ppm-create/ppm-create.component';
import { PpmEditComponent } from './ppm-edit/ppm-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: PpmHomeComponent },
  { path: 'products', pathMatch: 'full', component: PpmViewListComponent },
  { path: 'products/new', component: PpmCreateComponent },
  { path: 'products/edit/:id', component: PpmEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
