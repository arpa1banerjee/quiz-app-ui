import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  multi: any[];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Rank';
  timeline: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Right;

  colorScheme = {
    domain: ['#3f51b5', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.multi = [
      {
        "name": "Arpa",
        "series": [
          {
            "name": "Sun",
            "value": 0
          },
          {
            "name": "Mon",
            "value": 5
          },
          {
            "name": "Tue",
            "value": 15
          },
          {
            "name": "Wed",
            "value": 8
          },
          {
            "name": "Thurs",
            "value": 20
          },
          {
            "name": "Fri",
            "value": 28
          },
          {
            "name": "Sat",
            "value": 0
          }
        ]
      }
    ];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
