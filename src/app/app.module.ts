import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngeoModule } from 'angeo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseAngeoComponent } from './components/showcase-angeo/showcase-angeo.component';

@NgModule({
  declarations: [AppComponent, ShowcaseAngeoComponent],
  imports: [BrowserModule, AppRoutingModule, AngeoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
