import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output('deleteEmitter') deleteEmitter = new EventEmitter();

  constructor(public taskService: TaskService, public router: Router) {}

  ngOnInit(): void {}

  // tasto edit emitta cose
  edit(text: string, category: string, event: any) {
    this.editEmitter.emit({ text: text, category: category, event: event });
  }
  deleteTask() {
    this.deleteEmitter.emit();
  }
}
