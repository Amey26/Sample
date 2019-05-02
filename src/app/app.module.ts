import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvHeaderComponent } from './invoice/inv-header/inv-header.component';
import { SignInComponent } from './home/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    InvHeaderComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
