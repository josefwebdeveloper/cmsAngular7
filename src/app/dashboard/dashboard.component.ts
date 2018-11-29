import { Component, OnInit } from '@angular/core';
import{Mymessages} from '../data'

@Component({
  selector: 'app-calendar',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    user='John';
    mymessages=Mymessages;

  constructor() { }

  ngOnInit() {
  }
 // Doughnut
 public doughnutChartLabels: string[] = ['Websites', 'Logo', ' Social Media','Adwords',' E-Commerce'];
 public doughnutChartOptions: any = {
   responsive: false
 };

 public doughnutChartData: number[] = [350, 450, 100,123,537];
 public doughnutChartType = 'doughnut';
 public doughnutChartLegend = false;
// 
//lineChart
  public lineChartData: Array<any> = [
    { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' }
    
  ];
  public lineChartLabels: Array<any> = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(25,118,210,0.1)',
      borderColor: 'rgba(25,118,210,1)',
      pointBackgroundColor: 'rgba(25,118,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(25,118,210,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(38,218,210,0.1)',
      borderColor: 'rgba(38,218,210,1)',
      pointBackgroundColor: 'rgba(38,218,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38,218,210,0.5)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
  countMessage=0;
  select(mymessage){
    // console.log(this.status);
    mymessage.select = !mymessage.select; 
    if(mymessage.select){
    this.countMessage+=1;
    }else  this.countMessage-=1;

  }
}