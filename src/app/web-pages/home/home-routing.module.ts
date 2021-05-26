import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'home', redirectTo: 'home', pathMatch: 'full'
  //     },
  //     { path: 'home', component: HomeComponent},
 
  //   ]
  // }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
