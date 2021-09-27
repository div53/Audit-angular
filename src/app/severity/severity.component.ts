import { Component, OnInit } from '@angular/core';
import { Severity } from '../Services/severity.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {
  public pname:string="";
  public mname:string="";
  public id:number=0;
  public status:string="";
  public remedy:string="";
  constructor(private sev:Severity) { }

  ngOnInit(): void {
    this.pname=this.sev.getProjectName();
    this.mname=this.sev.getManagerName();
    this.status=this.sev.getStatus();
    this.id-this.sev.getId();
    this.remedy=this.sev.getRemedy();
  }


}
