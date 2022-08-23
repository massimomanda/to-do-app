import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-do-app';

  tasks: any = [
    { category: 'Life', text: 'ciao' },
    { category: 'Work', text: 'come va?' },
  ];

  lifeTasks = this.tasks.filter((t: any) => t.category === 'Life');
  workTasks = this.tasks.filter((t: any) => t.category === 'Work');

  constructor() {}
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
  ngOnInit(): void {}
}
