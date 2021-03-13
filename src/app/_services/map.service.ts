import { Injectable } from '@angular/core';
import * as europeMap from './mapData'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getMapData(): any {
    return europeMap.data;
  }
}
