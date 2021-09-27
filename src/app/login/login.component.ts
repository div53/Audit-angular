import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
// import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {


  constructor(private auth:AuthenticationService,
  private route:Router ) { }
  public username: string ="";
  public password: string ="";
  public message:string="";

  ngOnInit(): void {
  }

  onCredSubmit(){
    if(this.username.length>0) {
    this.auth.setCredentials(this.username,this.password);
    }
    else{
      this.message="Please enter a valid username";
    }

  }

}
