import { ProfileService } from './../../../service/profile.service';
import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-profile-graph',
  templateUrl: './profile-graph.component.html',
  styleUrls: ['./profile-graph.component.css']
})
export class ProfileGraphComponent implements OnInit {
  multi!: any[];
  legend: boolean = false;
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
  constructor(private profile: ProfileService) {
    this.profile.getProfileGraphData().subscribe(data => {
      this.multi = data;
    });
  }

  ngOnInit(): void {
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
