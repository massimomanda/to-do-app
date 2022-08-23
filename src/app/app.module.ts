import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KebabComponent } from './components/kebab/kebab.component';
import { CategoryComponent } from './components/category/category.component';
import { TaskComponent } from './components/task/task.component';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { NewToDoComponent } from './components/new-to-do/new-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    KebabComponent,
    CategoryComponent,
    TaskComponent,
    ThemeSwitchComponent,
    NewToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
