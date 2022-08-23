import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  tasks: any = [
    { category: 'Life', text: 'ciao', checked: false },
    { category: 'Work', text: 'come va?', checked: false },
  ];

  completedTasks: any = [];

  lifeTasks = this.tasks.filter((t: any) => t.category === 'Life');
  workTasks = this.tasks.filter((t: any) => t.category === 'Work');

  categories: any = [
    {
      name: 'All',
      color: 'blue',
      tasksLength: this.tasks.length,
    },
    {
      name: 'Life',
      color: 'red',
      tasksLength: this.lifeTasks.length,
    },
    { name: 'Work', color: 'yellow', tasksLength: this.workTasks.length },
  ];

  checked = false;

  checkTask(e: any) {
    this.checked = true;
    console.log(e)

    this.completedTasks.push(this.tasks[e])

    this.tasks.splice(e, 1)

    console.log(this.tasks, 'da fare')
    console.log(this.completedTasks, 'fatti')
  }
}
