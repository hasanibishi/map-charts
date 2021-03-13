import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './_components/charts/charts.component';
import { MapComponent } from './_components/map/map.component';

const routes: Routes = [
  {
    path: 'map', component: MapComponent
  },
  {
    path: 'charts', component: ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
