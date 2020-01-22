import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todos;

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  // on toggle
  onToggle(todo){
    todo.completed = !todo.completed;
    console.log(todo.completed);
  }
  // on delete
  onDelete(todo){
    console.log('delete');
  }
}
