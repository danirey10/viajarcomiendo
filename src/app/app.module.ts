import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AvisoLegalComponent } from './legal/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './legal/politica-privacidad/politica-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

