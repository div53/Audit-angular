import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService,
    private route:Router) { }
  public username:string= this.auth.getUserName();
  ngOnInit(): void {

  }
  logout(){
    this.route.navigate(['']);
    localStorage.clear();
  }

}
