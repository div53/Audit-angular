
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { Question } from "../Models/question.model";


@Injectable({providedIn: 'root'})

export class Severity{
    private project:string="";
    private managerName:string="";
    private auditType:string="";
    private auditId:number=0;
    private projectExecStatus:string="";
    private remedial:string="";
    private response:Question[]=[];
    severityUrl="https://auditseveritymicrosvc.azurewebsites.net/api/AuditSeverity/AuditSeverity/";
    private token= localStorage.getItem('auditToken');

    // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJuYmYiOjE2MzI2ODYxODIsImV4cCI6MTYzMzI5MDk4MiwiaWF0IjoxNjMyNjg2MTgyfQ.kcmGk2HRVFZ8bcp_0EKTOc7395TbxAaeic-Q7sYmqUU";

    requestData=
    {
      "projectName": "AuditManagement",
      "projectManagerName": "Deep",
      "applicationOwnerName": "Audit",
      "auditDetail": {
        "auditType": 0,
        "auditDate": "2021-09-22T12:07:51.075Z",
        "responses": [
          {
            "questionId": 0,
            "answer": false
          },
          {
            "questionId": 1,
            "answer": false
          },
          {
            "questionId": 0,
            "answer": false
          },
          {
            "questionId": 0,
            "answer": false
          },
          {
            "questionId": 0,
            "answer": true
          }
        ]
      }
    };

    headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJuYmYiOjE2MzI2ODYxODIsImV4cCI6MTYzMzI5MDk4MiwiaWF0IjoxNjMyNjg2MTgyfQ.kcmGk2HRVFZ8bcp_0EKTOc7395TbxAaeic-Q7sYmqUU"
      })
    }

    constructor(private http:HttpClient,private route:Router){

    }


        public nores:number=0;
    setDetails(pname:string,atype:string,manager:string,ans:Question[]){
        this.project=pname;
        this.auditType=atype;
        this.managerName=manager;
        this.response=ans;
    }

    calStatus(){

        for(var ques of this.response){
            if(ques.response==="NO")
                this.nores++;
        }
        if(this.auditType==="Internal")
        {
            if(this.nores<=3){
                this.projectExecStatus="Green";
                this.remedial="No Action Needed."
            }
            else
            {
                this.projectExecStatus="Red";
                this.remedial="Action to be taken in 2 weeks."
            }
        }
        else{
            if(this.nores<=1){
                this.projectExecStatus="Green";
                this.remedial="No Action Needed."
            }
            else
            {
                this.projectExecStatus="Red";
                this.remedial="Action to be taken in 1 weeks."
            }
        }
    }

    setupDetails(){
        this.auditId=Math.floor(Math.random()*10 + 1);
        this.calStatus();
    }

    getProjectName(){
        return this.project;
    }
    getManagerName(){
        return this.managerName;
    }
    getStatus(){
        return this.projectExecStatus;
    }
    getId(){
        return this.auditId;
    }

    getRemedy(){
        return this.remedial;
    }

    getTokFromlocal(){
      return this.token;
    }

    // getHeaders(token:any) {
    //   return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // }

    getSeverityStatus(){
      // let headers= new Headers();
      // headers.append('Authorization','Bearer'+ token);
      // const options =  ({
      //   headers: headers
      // });
      // let options = new RequestOptions({headers:Headers});

      // let tokentemp = !!localStorage.getItem('audiToken');
      // console.log("tokentemp"+tokentemp);
      // console.log("from local method"+!!this.getTokFromlocal());

      this.http.post(this.severityUrl,this.requestData,this.headers).subscribe(response=>{
        console.log("Bearer "+"`$(this.token)`");
        console.log(response);
      },error=>{
        if(error.status=="401"){
          // alert("Inavlid Login");
          // this.route.navigate(['server-error']);
        }
        else{
          alert("uncexpected error occured");
          //route here
          // this.route.navigate(['server-error']);
        }
      });
    }

}
