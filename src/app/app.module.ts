import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeleBateauComponent } from './modele-bateau/modele-bateau.component';
import { InfoBateauComponent } from './info-bateau/info-bateau.component';
import { DescriptionBateauComponent } from './description-bateau/description-bateau.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeleBateauComponent,
    InfoBateauComponent,
    DescriptionBateauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
