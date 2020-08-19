import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [PieChartComponent, BarChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [PieChartComponent, BarChartComponent]
})
export class ChartModule { }
