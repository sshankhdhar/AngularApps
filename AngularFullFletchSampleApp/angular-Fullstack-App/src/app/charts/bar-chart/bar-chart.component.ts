import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Office A', 'Office B', 'Office C'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {backgroundColor: 'rgba(255,0,0,0.3)'},
    {backgroundColor: 'rgba(0,255,0,0.3)'},
    {backgroundColor: 'rgba(0,0,255,0.3)'},
    {backgroundColor: 'rgba(32, 201, 161,0.3)'},
    {backgroundColor:  'rgba(128,0,0,0.3)'},
  ];

  public barChartData: ChartDataSets[] = [
    { data: [30, 30, 40], label: 'Request' },
    { data: [20, 10, 30], label: 'EM Req' },
    { data: [10, 20, 10], label: 'CSR Req' },
    { data: [25, 20, 35], label: 'Successfully Processed' },
    { data: [5, 10, 5], label: 'EPOC' }
  ];
  // Request	EM Req	CSR Req	Successfully Processed	EPOC




  constructor() { }

  ngOnInit(): void {
  }

}
