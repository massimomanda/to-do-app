import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  work:any = [];
  life:any = [];
  all:any = [];
  selectedArray: any;

  constructor(private router: Router, private TaskService: TaskService) { }

  ngOnInit(): void {

    if (this.router.url.includes('All')) {
      this.all = this.TaskService.tasks
      this.selectedArray = this.all
    } else if (this.router.url.includes('Life')) {
      this.life = this.TaskService.tasks.filter((t: any) => t.category === 'Life')
      this.selectedArray = this.life
    } else if (this.router.url.includes('Work')) {
      this.work = this.TaskService.tasks.filter((t: any) => t.category === 'Work')
      this.selectedArray = this.work
    }

  }
  
  addTask(){
    
  }
}
