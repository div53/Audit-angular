import { GetQuestionsList } from './../Services/getQuestionList.service';
import { Severity } from './../Services/severity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../Models/question.model';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  static getAuditTypeVal(): string {
    throw new Error('Method not implemented.');
  }

  constructor(private qList:GetQuestionsList,
    private sev:Severity , private severityapi:Severity,
    private route:Router,   ) { }

  public auditType:string="";
  public projectName:string="";
  showQues:boolean=false;
  nores:number=0;
  public quesList:Question[]=[];
  ngOnInit(): void {
  }

  getQuestions(){
    console.log(this.auditType);
    console.log(this.projectName);
    if(this.auditType.length>0 && this.projectName.length>0){
    this.showQues=true;
      if(this.auditType==="Internal")
      this.quesList=this.qList.getInternalQues();
      else
      this.quesList=this.qList.getSoxQues();
      this.qList.getQuestions(this.getAuditTypeVal());
    }
    else
    alert("Please Enter details correctly");

  }

  responseYes(i:number){
    this.quesList[i].response="YES";
  }

  responseNo(i:number){
    this.quesList[i].response="NO";
  }

  getResponse(){
    this.sev.setDetails(this.projectName,this.auditType,"Raghav",this.quesList);
    this.sev.setupDetails();
    this.route.navigate(['dashboard']);
    //we have to refractor here
    this.severityapi.getSeverityStatus();
  }


  getAuditTypeVal(){
    if(this.auditType==="Internal")
      return 0;
    else
      return 1;
  }

}
