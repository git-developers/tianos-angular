import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Heroes List' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
