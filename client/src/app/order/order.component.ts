import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:any;
  orderco:any;
  company:any;
  error:string

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public orderService: OrderService,
    private companyService:CompanyService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getOrder(params['id']);
    });
    // this.getCompany(this.order.orderco)
    // console.log(this.order)
  }

  getOrder(id) {
    this.orderService.get(id)
      .subscribe((order) => {
        this.order = order;
        console.log(this.order)
      });
  }

  // getCompany(id) {
  //   this.companyService.get(id)
  //     .subscribe((company) => {
  //       this.company = company;
  //       console.log(this.company)
  //     });
  // }

}
