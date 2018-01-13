import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

addCarStatus = '';
inputText = 'Defolt text';

constructor() {

}
addCar() {
  this.addCarStatus = 'Авто добавлено!';
}
// onKeyUp(event:Event) {
// onKeyUp(value) {
onKeyUp(event) {
    console.log(event);
// this.inputText = (<HTMLInputElement>event.target).value;
// this.inputText = value;
this.inputText = event.target.value;
}

}
