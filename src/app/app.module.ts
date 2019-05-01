import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 9f0c1f7a6acecc9bc67add58cef58dbea6f77571
>>>>>>> initial commit

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule
=======
    AppRoutingModule
>>>>>>> 9f0c1f7a6acecc9bc67add58cef58dbea6f77571
>>>>>>> initial commit
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
