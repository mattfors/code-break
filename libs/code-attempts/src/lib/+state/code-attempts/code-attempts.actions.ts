import { createAction, props } from '@ngrx/store';
import { CodeAttemptsEntity } from './code-attempts.models';

export const initCodeAttempts = createAction('[CodeAttempts Page] Init');

export const addCodeAttempt = createAction(
  '[CodeAttempts] Add Attempt',
  props<CodeAttemptsEntity>()
);

export const insertCodeAttempt = createAction(
  '[CodeAttempts] Insert Code Attempt',
  props<{codes: number[]}>()
);
