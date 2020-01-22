import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/Todos';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todos[];

  constructor(private todoService:TodosService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
