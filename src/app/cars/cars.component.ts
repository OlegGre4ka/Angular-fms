import { Component,
  //  ViewEncapsulation
  } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class CarsComponent {
  // carName = '';
  // carYear = 2018;


  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  constructor() {}

  updateListCar( car: { name: string, year: number}) {
    this.cars.push(car);
      }

  // addCar() {
  //   this.cars.push({
  //     name: this.carName,
  //     year: this.carYear
  //   });
  //   this.carName = '';
  //   this.carYear = 2018;
  // }

}

