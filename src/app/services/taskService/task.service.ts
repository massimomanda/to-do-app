import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private router: Router) {}

  selectedArray: any;
  tasks: any = [
    { category: 'Life', text: 'ciao' },
    { category: 'Work', text: 'come va?' },
  ];

  formVisible = false;

  completedTasks: any = [];

  lifeTasks = this.tasks.filter((t: any) => t.category === 'Life');
  workTasks = this.tasks.filter((t: any) => t.category === 'Work');

  categories: any = [
    {
      name: 'All',
      color: '#457b9d',
      tasksLength: this.tasks.length,
    },
    {
      name: 'Life',
      color: '#8ecae6',
      tasksLength: this.lifeTasks.length,
    },
    { name: 'Work', color: '#ffcdb2', tasksLength: this.workTasks.length },
  ];

  checked = false;

  checkTask(e: any) {
    this.checked = true;
    console.log(e);
    if (this.router.url.includes('All') || this.router.url.includes('home')) {
      this.completedTasks.push(this.tasks[e]);
      this.tasks.splice(e, 1);
      this.updateTasks();
    } else if (
      this.router.url.includes('Life') ||
      this.router.url.includes('Work')
    ) {
      this.completedTasks.push(this.tasks[e]); // per categoria
      this.selectedArray.splice(e, 1); // per categoria
      this.updateTasks();
    }

    console.log(this.tasks, 'da fare');
    console.log(this.completedTasks, 'fatti');
    this.updateTasks();
  }

  updateTasks() {
    this.lifeTasks = this.tasks.filter((t: any) => t.category === 'Life');
    this.workTasks = this.tasks.filter((t: any) => t.category === 'Work');

    this.categories = [
      {
        name: 'All',
        color: '#457b9d',
        tasksLength: this.tasks.length,
      },
      {
        name: 'Life',
        color: '#8ecae6',
        tasksLength: this.lifeTasks.length,
      },
      { name: 'Work', color: '#ffcdb2', tasksLength: this.workTasks.length },
    ];
  }
}
