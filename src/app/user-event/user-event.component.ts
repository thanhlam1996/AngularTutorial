import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  evenStyle={color: "blue", fontSize:"50px"};
  oddStyle={color: "red", fontSize:"20px"};
  name='';
  isHighlight(name){
    if(name>0)
      return true;
    return false;
  }

  

}
