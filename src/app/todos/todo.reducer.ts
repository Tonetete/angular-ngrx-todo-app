import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  crearTodo,
  toggleTodo,
  editarTodo,
  borrarTodo,
  toggleAllTodo,
  clearCompletedTodo,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Comprar tonterías'),
  new Todo('Buscar curro'),
  new Todo('Acabar la pandemia'),
];

const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleTodo, (state, { id }) =>
    state.map((todo) => ({
      ...todo,
      completado: todo.id === id ? !todo.completado : todo.completado,
    }))
  ),
  on(editarTodo, (state, { id, texto }) =>
    state.map((todo) => ({
      ...todo,
      texto: todo.id === id ? texto : todo.texto,
    }))
  ),
  on(borrarTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAllTodo, (state, { completado }) =>
    state.map((todo) => ({ ...todo, completado }))
  ),
  on(clearCompletedTodo, (state) => state.filter((todo) => !todo.completado))
);

export const todoReducer = (state: any, action: Action) => {
  return _todoReducer(state, action);
};
