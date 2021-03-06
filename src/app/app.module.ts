import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './statics/header-nav/header-nav.component';
import { NotFoundComponent } from './statics/not-found/not-found.component';
import { AppROutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppROutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
