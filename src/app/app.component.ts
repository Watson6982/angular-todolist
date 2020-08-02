import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Todo list';
  name: string = 'Josh';

  constructor() {
    console.log('Running on init ' + this.name);
    this.changeName('Joshua');
  }

  changeName(name: string): void {
    this.name = name;
  }
}