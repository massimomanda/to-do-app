import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

}
