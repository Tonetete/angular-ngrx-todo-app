import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { clearCompletedTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilters | undefined = 'ALL';
  filters: validFilters[] = ['ALL', 'COMPLETED', 'PENDING'];
  pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompletedTodo());
  }
}
