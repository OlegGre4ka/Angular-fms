import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2018;
  // @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
  @Output('onAddCar') сarEmitter = new EventEmitter<{name: string, year: number}>();
  // @Output() onAddCar: EventEmitter<{name: string, year: number}> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  addCar() {
    // this.cars.push({
    //   name: this.carName,
    //   year: this.carYear
    // });
    this.сarEmitter.emit({
    // this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2018;
  }
}
