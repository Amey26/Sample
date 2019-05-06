import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvHeaderComponent } from './invoice/inv-header/inv-header.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { InvAddComponent } from './invoice/inv-add/inv-add.component';
import { HttpClientModule } from '@angular/common/http';
import { InvAddParticularComponent } from './invoice/inv-add-particular/inv-add-particular.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InvHeaderComponent,
    SignInComponent,
    InvAddComponent,
    InvAddParticularComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
