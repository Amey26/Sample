import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

>>>>>>> f6b64ff25688b61faf05354960d5a12468a43e25
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvHeaderComponent } from './invoice/inv-header/inv-header.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { InvAddComponent } from './invoice/inv-add/inv-add.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { InvAddParticularComponent } from './invoice/inv-add-particular/inv-add-particular.component';


>>>>>>> f6b64ff25688b61faf05354960d5a12468a43e25
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
<<<<<<< HEAD
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> f6b64ff25688b61faf05354960d5a12468a43e25
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
