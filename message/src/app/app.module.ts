import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReadMessageComponent } from './read-message/read-message.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    ReadMessageComponent,
    DeleteMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
