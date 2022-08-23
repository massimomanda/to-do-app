import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'completed-tasks', component: CompletedTasksComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
