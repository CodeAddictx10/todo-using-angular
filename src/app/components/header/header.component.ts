import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo App';
  showAddTodo?: boolean;
  subcription?: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subcription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  toggleAddTodo() {
    this.uiService.toggleAddTodo();
  }
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
