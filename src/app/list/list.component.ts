import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //define type of brews
  brews: Object;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log('HERE IS THE BREWS', data);
    });
  }
}
