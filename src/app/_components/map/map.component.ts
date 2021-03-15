import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/_services/map.service';
import * as Highcharts from 'highcharts/highmaps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: any;

    constructor(private mapService: MapService) { }

    ngOnInit() {
        this.generateMap();
    }

    generateMap() {

        this.chartOptions = {
            chart: {
                backgroundColor: "#fff"
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            colorAxis: {
                minColor: '#fff',
                maxColor: '#ff0000',
            },
            mapNavigation: {
                enabled: false
            },
            legend: { enabled: false },
            xAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: { text: '' }
            },
            yAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: { text: '' }
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
                    var name = this.point.name;
                    var population = this.point.value;
                    var flag = this.point.flag;

                    var html = '<div class="content"><img src="' + flag + '"/><hr><div><span class="name">' + name + '</span> <div class="population" style=""><span> Population:</span><span> ' + population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' </span></div></div></div>';

                    return html;
                }
            },
            series: [{
                type: 'map',
                cursor: 'pointer',
                data: this.mapService.getMapData(),
                states: {
                    hover: {
                        borderColor: 'black'
                    }
                }
            }]
        };
    }

}
