import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'http://localhost:5000/todos';
  constructor(private httpClient: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }
  addTodo(todo: Todo): Observable<Todo> {
    const url = this.url;
    return this.httpClient.post<Todo>(url, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    return this.httpClient.delete<Todo>(url);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    return this.httpClient.put<Todo>(url, todo, httpOptions);
  }
}
