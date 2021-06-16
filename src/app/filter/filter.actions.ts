import { createAction, props } from '@ngrx/store';

export type validFilters = 'ALL' | 'PENDING' | 'COMPLETED';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: validFilters }>()
);
