import { Component} from '@angular/core';
import { ChartsService } from '../charts.service';
import Chart from 'chart.js/auto';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent extends ChartBaseComponent{
 
  constructor(public override service: ChartsService) {
    super(service);
  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: "No of sales",
            data: realdata,
            backgroundColor: colordata,
          }, 
        ]
      },
      options: {
        aspectRatio: 2,
      }
    });
  }
  }
