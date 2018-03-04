import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-listcompanies',
  templateUrl: './listcompanies.component.html',
  styleUrls: ['./listcompanies.component.css']
})
export class ListcompaniesComponent implements OnInit {
  companies:Array<Object>;
  user:any;

  constructor(    
    private companyService: CompanyService,
    public sessionService: SessionService
  ) {}

  ngOnInit() {
    // this.user = this.sessionService.back().subscribe( e => {console.log(e)})
    this.getCompanies()
  }

  getCompanies() {
    this.companyService.getList().subscribe(list => {
      console.log(list)
      this.companies = list
      console.log(this.companies)
    });
   
}}
