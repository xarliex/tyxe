import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {
  tickerName:string;
  tickerImg:string;
  tickerDescription:string;
  mktCap:number;
  totalShares:number;
  percentage:number;
  avbShares:number;
  tickerPrice:number;
  error:string

  
  constructor(
    public router: Router,
    public companyService: CompanyService
  ) { }

  ngOnInit() {
  }

  
  submitForm(form){
    this.companyService.register(form.value)
    .catch(e => this.error = e)
    .subscribe( status => { if(status === 200) this.router.navigate(['/companies/list']) } )
    console.log(form.value)
  }


}
