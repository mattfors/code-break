import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CodeAttemptsActions from './code-attempts.actions';
import { CodeAttemptsEntity } from './code-attempts.models';
import { insertCodeAttempt } from './code-attempts.actions';

export const CODE_ATTEMPTS_FEATURE_KEY = 'codeAttempts';

export type CodeAttemptsState = EntityState<CodeAttemptsEntity>

export interface CodeAttemptsPartialState {
  readonly [CODE_ATTEMPTS_FEATURE_KEY]: CodeAttemptsState;
}

export const codeAttemptsAdapter: EntityAdapter<CodeAttemptsEntity> =
  createEntityAdapter<CodeAttemptsEntity>();

export const initialCodeAttemptsState: CodeAttemptsState = codeAttemptsAdapter.getInitialState();

const reducer = createReducer(
  initialCodeAttemptsState,
  on(CodeAttemptsActions.initCodeAttempts, (state) => ({
    ...state,
  })),
  on(CodeAttemptsActions.addCodeAttempt,(state, entity) =>
    codeAttemptsAdapter.addOne(entity, state)
  ),
  on(CodeAttemptsActions.insertCodeAttempt, (state, prop) =>
    codeAttemptsAdapter.addOne({id: state.ids.length, ...prop}, state)
  )
);

export function codeAttemptsReducer(
  state: CodeAttemptsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = codeAttemptsAdapter.getSelectors();
