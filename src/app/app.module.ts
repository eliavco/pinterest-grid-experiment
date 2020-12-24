import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { PhotoComponent } from './photo/photo.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent, CardComponent, TextComponent, PhotoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ApiService ]
})
export class AppModule { }
