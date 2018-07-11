import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayMenu: string = 'recipe';

  onDisplayList(event) {
    this.displayMenu = event;
  }
}
