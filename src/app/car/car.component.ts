import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  // carName = 'Toyota';
  // carYear = 2018;
  // @Input() carItem: {name: string, year: number} ;

  @Input('carItem') car: {name: string, year: number};//аліас

  // private carItem = false;
}



