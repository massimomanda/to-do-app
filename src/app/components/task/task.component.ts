import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input('taskText') taskText!: string;
  @Input('index') index!: number;
  @Input('category') category!: string;
  @Input('categoryColor') categoryColor!: string;
  @Output('editEmitter') editEmitter = new EventEmitter();

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  edit(text: string, category: string) {
    this.editEmitter.emit({text: text, category: category });

  }
}
