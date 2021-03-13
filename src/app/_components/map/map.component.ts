import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import * as DataForMap from './mapData'

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions;

}
