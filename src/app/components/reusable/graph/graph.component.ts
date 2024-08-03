import { Component, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

interface IoTReading {
  device_tag: string;
  temperature: number;
  humidity: number;
  time: string;
}

// HTML
// <apx-chart [series]="series" [chart]="chart" [title]="title"></apx-chart>
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})

// implements OnInit, OnChanges
export class GraphComponent {
  @Input() readings: IoTReading[] = [];
  //private chart: Chart | undefined;

  /*
  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['readings'] && !changes['readings'].firstChange) {
      this.updateChart();
    }
  }*/

  //createChart
}
