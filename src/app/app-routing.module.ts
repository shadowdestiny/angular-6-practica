import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './public/vehicles/detail/vehicle-detail.component';
import { HomeComponent } from './public/home/home.component';
import { MillonComponent } from './public/millon/millon.component';
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';
import { AuthHomeComponent } from './auth/home/auth-home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home',
    /*component: HomeComponent,*/
    component: MillonComponent,
    /*pathMatch: 'full',
    canActivate: [PublicGuard]*/
  },
  /*{
    path: 'auth-home',
    component: AuthHomeComponent,
    data: {name: 'AuthHome'},
    canActivate: [AuthGuard]
  },
  {path: 'vehicles/:id', component: VehicleDetailComponent}*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
