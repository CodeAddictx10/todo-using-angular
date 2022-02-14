import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onUpdateTodo: EventEmitter<Todo> = new EventEmitter();
  faTimes: IconDefinition = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo): void {
    this.onDeleteTodo.emit(todo);
  }
  onUpdate(todo: Todo): void {
    this.onUpdateTodo.emit(todo);
  }
}
