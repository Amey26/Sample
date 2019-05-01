import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Sample';
=======
<<<<<<< HEAD
  title = 'sample';
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
=======
  title = 'Sample';
>>>>>>> 9f0c1f7a6acecc9bc67add58cef58dbea6f77571
>>>>>>> initial commit
}
