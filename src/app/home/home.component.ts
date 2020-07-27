import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// clickCounter one way data binding

//name two way data binding
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
}
