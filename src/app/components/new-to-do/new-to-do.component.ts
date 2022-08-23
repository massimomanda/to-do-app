import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css'],
})
export class NewToDoComponent implements OnInit {
  constructor(private _fb: FormBuilder, private taskService: TaskService) {}

  @Output('newTaskAdded') newTaskAdded = new EventEmitter();

  ngOnInit(): void {}
  form = new FormGroup({
    input: new FormControl(''),
    select: new FormControl(''),
  });

  addTask(e: any) {
    console.log(this.form.value);

    let newTodo = {
      category: this.form.value.select,
      text: this.form.value.input,
    };

    this.taskService.formVisible = false;
    this.taskService.tasks.push(newTodo);
    this.newTaskAdded.emit(e);
  }
}
