import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../services/user.service';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-newsell',
  templateUrl: './newsell.component.html',
  styleUrls: ['./newsell.component.css']
})
export class NewsellComponent implements OnInit {

  shareQuantity: number;
  company:any;
  user:any;
  order:any;
  orderer:any;
  orderco:any;
  orderQty:number;
  orderValue:number;
  statusflag:boolean;
  typeflag:boolean;
  error:string;
  totalPrice: number;
  newOrder: any = {
    orderValue: 0
  };
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public orderService: OrderService,
    private companyService:CompanyService,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCompany(params['id']);
    });
    this.sessionService.currentUserLogged().subscribe(user=>{
      this.user = user;
      console.log(this.user)
    })
  }

  getCompany(id) {
    this.companyService.get(id)
      .subscribe((company) => {
        this.company = company;
        console.log(this.company)
      });
  }

  locals() {
    this.orderService.getlocals()
      .subscribe((orderer) => {
        this.orderer = orderer;
        console.log(this.orderer)
      });
  }

  submitSell(form){
    console.log(form.value)
    console.log(this.company._id)
    this.orderService.sell(form.value)
    .catch(e => this.error = e)
    .subscribe( status => { if(status === 200) this.router.navigate([`/orders/company/${this.company._id}`]) } )
    console.log(form.value)
  }

  updatePrice(event) {
    this.newOrder.orderValue = this.company.tickerPrice * this.shareQuantity;
  }



  // submitForm(id, form){
  //   console.log(form.value)
  //   console.log(id)
  //   console.log(this.user._id)
  //   this.userService.edit(this.user._id, form.value)
  //   .catch(e => this.error = e)
  //   .subscribe(status => { if(status === 200) this.router.navigate([`/user/${this.user._id}`]) } )
  // }

}
