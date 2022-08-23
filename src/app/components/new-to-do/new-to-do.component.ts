import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }
   form = new FormGroup({
    input: new FormControl(''),
    select: new FormControl(''),
  });
  
  addTask(){

    console.log(this.form.value)
  }
}
