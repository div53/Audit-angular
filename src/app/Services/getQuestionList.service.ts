import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ChecklistComponent } from '../checklist/checklist.component';
import { Question } from "../Models/question.model";


@Injectable({providedIn: 'root'})
export class GetQuestionsList{

  constructor(private http:HttpClient){}
  queSerUrl="https://auditchecklistmicrosvc.azurewebsites.net/api/AuditChecklist/GetAuditTypeQuestions/1/";
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJuYmYiOjE2MzI2ODYxODIsImV4cCI6MTYzMzI5MDk4MiwiaWF0IjoxNjMyNjg2MTgyfQ.kcmGk2HRVFZ8bcp_0EKTOc7395TbxAaeic-Q7sYmqUU";
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJuYmYiOjE2MzI2ODYxODIsImV4cCI6MTYzMzI5MDk4MiwiaWF0IjoxNjMyNjg2MTgyfQ.kcmGk2HRVFZ8bcp_0EKTOc7395TbxAaeic-Q7sYmqUU`
    })
  }


    private internalQues:Question[]=[
        new Question(0,"Have all Change requests followed SDLC before PROD move?","none"),
        new Question(1,"Have all Change requests been approved by the application owner?","none"),
        new Question(2,"Are all artifacts like CR document, Unit test cases available?","none"),
        new Question(3,"Is the SIT and UAT sign-off available?","none"),
        new Question(4,"Is data deletion from the system done with application owner approval?","none"),
    ];

    private soxQues:Question[]=[
        new Question(0,"Have all Change requests followed SDLC before PROD move?","none"),
        new Question(1,"Have all Change requests been approved by the application owner?","none"),
        new Question(2,"For a major change, was there a database backup taken before and after PROD move?","none"),
        new Question(3,"Has the application owner approval obtained while adding a user to the system?","none"),
        new Question(4,"Is data deletion from the system done with application owner approval?","none"),
    ];

    getInternalQues(){
        return this.internalQues;
    }

    getSoxQues(){
        return this.soxQues;
    }



    getQuestions(auditVal:number){
      this.http.get(this.queSerUrl,this.headers).subscribe(response=>{
        console.log(response);
      },error=>{
        if(error.status=="401"){
          //route here to 405 error unthorized error
          // alert("unthorized error");
          // this.route.navigate(['server-error']);
        }
        else{
          alert("uncexpected error occured");
          // this.route.navigate(['server-error']);
        }
      });
    }


}
