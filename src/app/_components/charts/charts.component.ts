import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/_services/map.service';
import * as Highcharts from 'highcharts/highmaps';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.generateChart('column');
  }

  generateChart(type: string) {

    const data = this.mapService.getEuropeData()
      .map(x => ({
        name: x.name,
        y: x.value,
        flag: x.flag,
        color: this.generateColors()
      }))
      .filter((value, index, array) =>
        index === array.findIndex((t) => (
          t.name === value.name
        )))

    this.chartOptions = {
      chart: {
        type: type,
        backgroundColor: "#fff"
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      legend: { enabled: false },
      xAxis: {
        categories: data.map(x => x.name)
      },
      plotOptions: {
        series: {
          events: {
            mouseOver: function () {
              this.chart.update({
                tooltip: {
                  hideDelay: 0
                }
              });
            }
          },
          column: {
            pointPadding: 0
          }
        }
      },
      tooltip: {
        outside: true,
        animation: false,
        useHTML: true,
        backgroundColor: '#fff',
        borderRadius: 3,
        borderColor: '#888',
        formatter: function () {
          const name = this.point.name;
          const population = this.point.y;
          const flag = this.point.flag;

          const html = '<div class="content"><img src="'
            + flag + '"/><hr><div><span class="name">'
            + name + '</span> <div class="population"><span> Population: </span><span>'
            + population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            + '</span></div></div></div>';

          return html;
        }
      },
      series: [{
        cursor: 'pointer',
        data: data
      }]
    }
  }

  generateColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
