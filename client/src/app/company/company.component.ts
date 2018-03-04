import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  company:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private companyService:CompanyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCompany(params['id']);
    });
  }

  getCompany(id) {
    this.companyService.get(id)
      .subscribe((company) => {
        this.company = company;
        console.log(this.company)
      });
  }

}
