import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
  removeTodo(todo: Todo): void {
    this.todoService
      .deleteTodo(todo)
      .subscribe(
        () => (this.todos = this.todos.filter((item) => item.id !== todo.id))
      );
  }
  updateTodo(todo: Todo): void {
    todo.reminder = !todo.reminder;
    this.todoService.updateTodo(todo).subscribe();
  }

  addNewTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }
}
