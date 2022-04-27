import { Component, OnInit } from '@angular/core';
import { faTrash ,faCircleMinus, faTrashCanArrowUp} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  faTrashAlt = faTrashCanArrowUp;
  faCircleMinus = faCircleMinus;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
      
    });
  }

  changeTodoStatus(todo: Todo){
    this.todoService.changesStatus(todo);
    console.log("change Todo", this.todos);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
    console.log("delete Todo", this.todos);
  }

}
