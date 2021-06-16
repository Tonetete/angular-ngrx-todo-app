import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters | undefined = 'ALL' as validFilters;

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export const filterReducer = (
  state: validFilters | undefined,
  action: Action
) => {
  return _filterReducer(state, action);
};
