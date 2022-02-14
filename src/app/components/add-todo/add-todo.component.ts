import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTodo!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.text === '' || this.day === '') {
      alert('Please check the form');
      return;
    }
    const newTodo: Todo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.addTodo.emit(newTodo);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
