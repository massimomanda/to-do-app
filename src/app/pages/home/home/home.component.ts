import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/taskService/task.service';
import { ThemetoggleDirective } from 'src/app/directives/themetoggle.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskService: TaskService, private router:Router) {}

  ngOnInit(): void {

  }

  goToDetails(c:any){
   this.router.navigate([`/details/${c}`])
   console.log(c)

  }
}
