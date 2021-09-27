import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService{
    private username:string="";
    private password:string="";
    private autUrl="https://authorizationmicrosvc.azurewebsites.net/api/users/authenticate";



    constructor( private http: HttpClient,
      private route:Router ){


    }
    headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json',

      })
    }
    setCredentials(uname:string, pword:string){
        this.username=uname;
        this.password=pword;
        console.log("Username-"+this.username);
        console.log("Password-"+this.password);
        this.authAndGetToken(this.username,this.password);

    }

    getUserName(){
        return this.username;
    }

    authAndGetToken(username:string,password:string){
      var databody={ "username": username,"password":password };
      this.http.post(this.autUrl,databody,this.headers)
      .subscribe(response =>{
        console.log(response);
        let res:any=response;
        localStorage.setItem('auditToken',res.token);
        this.route.navigate(['checklist']);

      },
      error=>{
        if(error.status=="400"){
          // alert("Inavlid Login");
          //route here
          //this.route.navigate(['server-error']);
        }
        else{
          alert("uncexpected error occured");
          // route here erver error
        }
      })

    }

}
