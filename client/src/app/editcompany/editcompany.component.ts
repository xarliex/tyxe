import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
  tickerName:string;
  tickerImg:string;
  tickerDescription:string;
  mktCap:number;
  totalShares:number;
  percentage:number;
  avbShares:number;
  tickerPrice:number;
  company:any;
  error:string

  constructor(    
    public router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService
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

  submitForm(id,form){
    console.log(form.value)
    console.log(this.company._id)
    this.companyService.edit(this.company._id, form.value)
    .catch(e => this.error = e)
    .subscribe(status => { if(status === 200) this.router.navigate([`/companies/${this.company._id}`]) } )
  }

  deleteCompany(id) {
    this.companyService.remove(id)
      .subscribe((company) => {
        this.company = company;
        console.log(this.company)
      });
}

}
