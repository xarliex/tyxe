import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CompanyService } from '../../services/company.service';
import { SessionService } from '../../services/session.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
    orders: Array<Object>;
    company: any;
    user: any;
    error:string

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public orderService: OrderService,
    private companyService: CompanyService,
    public sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCompany(params['id']);
    });
    this.getOrders()
  }

  getCompany(id) {
    this.companyService.get(id)
      .subscribe((company) => {
        this.company = company;
        console.log(this.company)
      });
  }

  getOrders() {
    this.orderService.getListorders().subscribe(list => {
      console.log(list)
      this.orders = list
      console.log(this.orders)
    });
  }
}