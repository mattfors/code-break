import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CODE_ATTEMPTS_FEATURE_KEY,
  CodeAttemptsState,
  codeAttemptsAdapter,
} from './code-attempts.reducer';

export const selectCodeAttemptsState = createFeatureSelector<CodeAttemptsState>(
  CODE_ATTEMPTS_FEATURE_KEY
);

const { selectAll, selectEntities, selectTotal } = codeAttemptsAdapter.getSelectors();

export const selectAllCodeAttempts = createSelector(
  selectCodeAttemptsState,
  (state: CodeAttemptsState) => selectAll(state)
);

export const selectCodeAttemptsEntities = createSelector(
  selectCodeAttemptsState,
  (state: CodeAttemptsState) => selectEntities(state)
);



