import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters | undefined): Todo[] {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((todo) => todo.completado);
      case 'PENDING':
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
  }
}
