import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvHeaderComponent } from './invoice/inv-header/inv-header.component';


const routes: Routes = [
  { path:"header",component:InvHeaderComponent},
  { path:"", component:InvHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
