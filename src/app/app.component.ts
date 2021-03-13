import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedTab = sessionStorage.getItem('selectedTab') ? sessionStorage.getItem('selectedTab') : '0';

  constructor(
    private router: Router
  ) { }

  goTo(event: MatTabChangeEvent) {
    const index = event.index;
    index === 0 ? this.router.navigate(['map']) : this.router.navigate(['charts']);
    sessionStorage.setItem('selectedTab', index.toString());
  }
}
