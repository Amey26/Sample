import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvHeaderComponent } from './invoice/inv-header/inv-header.component';
import { SignInComponent } from './home/sign-in/sign-in.component';

const routes: Routes = [
  { path:"header",component:InvHeaderComponent},
  { path:"", component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
