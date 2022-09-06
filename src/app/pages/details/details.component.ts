import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  work: any = [];
  life: any = [];
  all: any = [];
  selectedArray: any;
  receivedText!: string;

  currentCategory: any = this.route.snapshot.paramMap.get('category');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public TaskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getCategoryArray();
    console.log(this.router.url);
  }

  getCategoryArray() {
    if (this.router.url.includes('All')) {
      this.all = this.TaskService.tasks;
      this.selectedArray = this.all;
    } else if (this.router.url.includes('Life')) {
      this.life = this.TaskService.tasks.filter(
        (t: any) => t.category === 'Life'
      );
      this.selectedArray = this.life;
    } else if (this.router.url.includes('Work')) {
      this.work = this.TaskService.tasks.filter(
        (t: any) => t.category === 'Work'
      );
      this.selectedArray = this.work;
    }
  }

  onNewTaskAdded() {
    this.getCategoryArray();
  }

  onEditEmitter(task: any) {
    // variabile per attivare la modalitá di editing del task
    this.TaskService.editMode = true;

    this.TaskService.formVisible = true;
    this.receivedText = task.text;
    console.log('task', task);
    this.TaskService.currentEditTask = task;
  }
}
