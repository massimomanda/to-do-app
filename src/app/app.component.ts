import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'to-do-app';

  tasks:any = [1,2,3,4]

  constructor() { }
  categories:any = [{
    name:'All',
    color:'blue'
  },
  {
    name:'Life',
    color:'red',
  },
  {name:'Work',
  color:'yellow',}
    
  ]
  ngOnInit(): void {
  }
}
