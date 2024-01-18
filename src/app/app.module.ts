import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HistoriaComponent } from './historia/historia.component';
import { PanelComponent } from './panel/panel.component';
import { DadosComponent } from './dados/dados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HistoriaComponent,
    PanelComponent,
    DadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
