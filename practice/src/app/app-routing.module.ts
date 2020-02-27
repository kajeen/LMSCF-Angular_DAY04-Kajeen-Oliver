import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KajeenComponent } from './kajeen/kajeen.component';


const routes: Routes = [
  {
    path:"kajeen", component: KajeenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
