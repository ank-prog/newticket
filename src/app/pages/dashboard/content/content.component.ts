import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  chartOptions: any = {
    chart: {
      type: 'column',
    },

    title: {
      text: 'Ticket',
    },
    credits: {
      enabled: false,
    },
    subtitle: {},
    xAxis: {
      categories: ['1', '2', '3', '4'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No. of Ticket '
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',

      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding:0,
        borderWidth:0,
      },
    },
    legend: {
      symbolRadius: 0,
      enabled: false,
    },
    series: [
      {
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2],
      },
      {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 56],
      },
      {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4],
      },
    ],
  };
  chartOptions1: any = {
    chart: {
      plotShadow: false,
      type: 'pie',
      marginTop:10,
      marginBottom:90
    },

    title: {
      text: '',
    },
    subtitle: {
      text: '<br><b>Total no. of Ticket Raised</b>',
      verticalAlign: 'bottom',
      style: {
        fontSize: '1.5em'
      },
    },
    legend: {
      symbolRadius: 0,
      style: {
        height: '500',
        width: '500',
      },
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        size:'90%',
        allowPointSelect: true,
        cursor: '',
        center:true,
        dataLabels: {
          enabled: true,
          distance: '-35%'
        },
        showInLegend: true,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,

        data: [
          {
            name: 'HR',
            y: 30.5,
            selected: true,
            sliced: true,
          },
          {
            name: 'IT',
            y: 40.5,
          },
          {
            name: 'Administration',
            y: 29,
          },
          
        ],
      },
    ],
  };
  chartOptions2: any = {
    chart: {
      type: 'column',
      style: {
        fontFamily: '',
      },
    },

    title: {
      text: '',
    },

    legend: {
      symbolRadius: 0,
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    subtitle: {
      text: '',
      verticalAlign: 'bottom',
      style: {
        fontSize: '2rem',
      },
    },
    xAxis: {
      categories: ['1', '2', '3', '4'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No. of Dispatch',
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2],
      },
      {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 56],
      },
      {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4],
      },
    ],
  };
  chartOptions3: any = {
    chart: {
      type: 'column',
    },

    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    subtitle: {},
    xAxis: {
      categories: ['1', '2', '3', '4'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No. of Purchase',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',

      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 2,
      },
    },
    legend: {
      symbolRadius: 0,
      enabled: false,
    },
    series: [
      {
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2],
      },
      {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 56],
      },
      {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4],
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
    var chart = Highcharts.chart('container', this.chartOptions);
    var chart = Highcharts.chart('container1', this.chartOptions1);
    var chart = Highcharts.chart('container2', this.chartOptions2);
    var chart = Highcharts.chart('container3', this.chartOptions3);
  }

}
