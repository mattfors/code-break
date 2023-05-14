import { Action } from '@ngrx/store';

import * as CodeAttemptsActions from './code-attempts.actions';
import { CodeAttemptsEntity } from './code-attempts.models';
import {
  CodeAttemptsState,
  initialCodeAttemptsState,
  codeAttemptsReducer,
} from './code-attempts.reducer';

describe('CodeAttempts Reducer', () => {
  const createCodeAttemptsEntity = (
    id: string,
    name = ''
  ): CodeAttemptsEntity => ({
    id,
    codes: []
  });



  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = codeAttemptsReducer(initialCodeAttemptsState, action);

      expect(result).toBe(initialCodeAttemptsState);
    });
  });
});
