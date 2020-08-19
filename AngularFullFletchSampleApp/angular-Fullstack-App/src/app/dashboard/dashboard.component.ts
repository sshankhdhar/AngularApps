import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  requestLabel1 = [['EM Req'], ['CSR Req']];
  requestData1 = [60, 40];

  requestLabel2 = [['Directly Processed']	, ['EPOC']];
  requestData2 = [80 , 20];

  epocLabel = [['IR Failed']	, ['Duplicate plan year'], ['Multiple A/c'], ['Account not Found'], ['Other']];
  epocData = [5, 5,	4, 4, 2];

  constructor() { }

  ngOnInit(): void {
  }

}
