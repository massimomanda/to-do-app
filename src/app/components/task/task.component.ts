import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input('taskText') taskText!: string;
  @Input('index') index!: number;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}
}
