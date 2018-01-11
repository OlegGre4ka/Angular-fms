import { Component, OnInit } from '@angular/core';

// створений компонент треба зареєструвати в файлі app.module.ts, в полі declarations

@Component({
    selector: 'app-my',
    templateUrl: './my.component.html'
})
export class MyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}