import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  tasks: Task[] = [];
  taskName: string = '';

  ngOnInit(): void {
    this.loadTasks();
  }



  addTask(): void {
    if (this.taskName.trim()) {
      this.tasks.push(new Task(this.taskName));
      this.taskName = '';
      this.saveTasks();
    }
  }

  removeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if(index > -1) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks(): void {
    const savedTasks = localStorage.getItem('tasks');
    if(savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

}
