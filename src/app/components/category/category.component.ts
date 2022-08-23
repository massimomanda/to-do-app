import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input('categoryName') categoryName!:string
  @Input('backgroundColor') backgroundColor!:string
  @Input('tasksNumber') tasksNumber!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
