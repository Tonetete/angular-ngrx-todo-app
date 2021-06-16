import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear TODO',
  props<{ texto: string }>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle TODO',
  props<{ id: number }>()
);

export const editarTodo = createAction(
  '[TODO] Editar TODO',
  props<{ id: number; texto: string }>()
);

export const borrarTodo = createAction(
  '[TODO] Borrar TODO',
  props<{ id: number }>()
);

export const toggleAllTodo = createAction(
  '[TODO] ToggleAll TODO',
  props<{ completado: boolean }>()
);

export const clearCompletedTodo = createAction('[TODO] ClearCompleted TODO');
