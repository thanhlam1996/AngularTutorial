import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  constructor() { }
  isShow=true;
  arrSubjects=['NodeJS', 'AngularJS', 'C#', 'Java']
  ngOnInit() {
  }

}
