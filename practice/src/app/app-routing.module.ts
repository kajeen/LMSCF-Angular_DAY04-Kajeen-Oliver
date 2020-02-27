import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KajeenComponent } from './kajeen/kajeen.component';
import { OliverComponent } from './oliver/oliver.component';
import { MichaelComponent } from './michael/michael.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:"", component: AboutComponent
  },{
    path:"kajeen", component: KajeenComponent
  },{
    path:"oliver", component: OliverComponent
  },{
    path:"michael", component: MichaelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
