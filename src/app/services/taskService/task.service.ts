import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // task da modificare
  currentEditTask: any;
  // flag pe visuallizzare la modalitá modifica
  editMode: boolean = false;

  // struttura dati principale dei tasks
  tasks: any = [
    { category: 'Life', text: 'ciao' },
    { category: 'Work', text: 'come va?' },
  ];

  // rende visibile il form per l`inserimento dei task
  formVisible = false;

  completedTasks: any = [];

  // crea un array specifico in base alla categoria
  lifeTasks = this.tasks.filter((t: any) => t.category === 'Life');
  workTasks = this.tasks.filter((t: any) => t.category === 'Work');

  // categorie di default da leggere all`avvio
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
  // mette i task nei task completati
  checkTask(e: any) {
    this.checked = true;
    console.log(e);

    this.completedTasks.push(this.tasks[e]);

    this.tasks.splice(e, 1);

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

  editTask(i:any, obj:any){
     this.tasks.splice(i, 1, obj)
     console.log(this.tasks)
  }
  
}
