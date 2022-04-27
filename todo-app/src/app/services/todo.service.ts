import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'Learn C++',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '2',
        title: 'Learn Java',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '3',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodo() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changesStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex((currentObj) => 
      currentObj.id === todo.id
    );
    this.todos.splice(index, 1);
  }
}
