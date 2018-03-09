import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.css']
})

export class LineChartDemoComponent implements OnInit {
  @Input() pastPrices: any;
  pastTicketPrice: any = [];
  pastTicketDate: any = [];
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.1)',
      borderColor: 'rgba(33,206,153,1)',
      pointBackgroundColor: 'rgba(33,206,153,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
    this.pastPrices.forEach(element => {
      this.pastTicketPrice.push(element.price);
      this.pastTicketDate.push(element.date.substring(0,10));
    })
    this.lineChartData = [
      {data: this.pastTicketPrice, label: "Stock Price"}
    ];
    this.lineChartLabels = this.pastTicketDate;
  }

}

