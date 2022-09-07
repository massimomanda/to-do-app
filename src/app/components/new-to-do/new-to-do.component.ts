import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css'],
})
export class NewToDoComponent implements OnInit {
  constructor(private _fb: FormBuilder, public taskService: TaskService) {}

  @Output('newTaskAdded') newTaskAdded = new EventEmitter();

  form = new FormGroup({
    input: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.makeEditForm();
  }

  makeEditForm() {
    // deve uscire solo se c`e` l`edit
    if (this.taskService.editMode) {
      this.form.setValue({
        input: this.taskService.currentEditTask.task.text,
        select: this.taskService.currentEditTask.task.category,
      });
    }
  }

  addTask(e: any) {
    let newTodo = {
      category: this.form.value.select,
      text: this.form.value.input,
    };
    if (this.taskService.editMode == false) {
      this.taskService.formVisible = false;

      this.taskService.tasks.push(newTodo);
      this.newTaskAdded.emit(e);
      this.taskService.updateTasks();
    } else {
      this.taskService.formVisible = false;
      this.taskService.editTask(this.taskService.currentEditTask.i, newTodo);
      this.taskService.updateTasks();
      this.taskService.editMode = false;
    }
  }
}
