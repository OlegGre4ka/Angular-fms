import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'Створення власної директиви';
  items = [1, 2, 3, 4, 5];
  current = 0;
  onClick(number: number) {
this.current = number;
  }
}


