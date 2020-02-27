import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { KajeenComponent } from './kajeen/kajeen.component';
import { OliverComponent } from './oliver/oliver.component';
import { MichaelComponent } from './michael/michael.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumboComponent,
    KajeenComponent,
    OliverComponent,
    MichaelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
