import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Volvo', 'Toyota'];
dates = [
  new Date(2015, 2, 4).toDateString(),
  new Date(2017, 3, 2).toDateString(),
  new Date(2018, 4, 8).toDateString(),
  new Date(2010, 7, 3).toDateString(),
];
  constructor() {

  }
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';

  }


}
