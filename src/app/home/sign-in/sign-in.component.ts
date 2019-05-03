import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private router: Router) {
    
   }
  title = 'Sample';
  userName: string;
  password: string;
  colr: string;
  message: string;

  ngOnInit() {
  }
  validate(): void{
    if( (this.userName.toLowerCase()=="amey"|| this.userName.toLowerCase()=="pankaj") &&
        (this.password.toLowerCase()=="test") ){
      this.colr ="green";
      this.message = "Welcome";
      this.router.navigate(['/header']);
    } else {
      this.colr ="red";
      this.message = "Bad User";
    }

  }
}
