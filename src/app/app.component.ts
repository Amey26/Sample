import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  userName: string;
  password: string;
  colr: string;
  message: string;

  constructor(){
  }

  validate(): void{
    if( (this.userName.startsWith("a")) && (this.password.startsWith("b")) ){
      this.colr ="green";
      this.message = "Welcome";
    } else {
      this.colr ="red";
      this.message = "Bad User";
    }

  }
}
