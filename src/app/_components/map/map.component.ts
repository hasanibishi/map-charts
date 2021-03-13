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
        let dataMap = this.mapService.getMapData().map(x => ({
            value: x.value,
            name: x.name,
            path: x.path,
            color: x.path
        }));

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
            legend: false,
            mapNavigation: {
                enabled: false
            },
            xAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: false
            },
            yAxis: {
                lineWidth: 0,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: false
            },
            series: [{
                type: 'map',
                cursor: 'pointer',
                data: dataMap,
                states: {
                    hover: {
                        borderColor: 'black'
                    }
                }
            }]
        };
    }

}
