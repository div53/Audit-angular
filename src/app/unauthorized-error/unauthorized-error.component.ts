import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized-error',
  templateUrl: './unauthorized-error.component.html',
  styleUrls: ['./unauthorized-error.component.css']
})
export class UnauthorizedErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goBack(){
    //route here to login
    // this.router.navigate(["login"]);
  }

}
