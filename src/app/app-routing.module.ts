import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './web-pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:LogInComponent
  },
  {
    path:'layout',
    component:LayoutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
 

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
