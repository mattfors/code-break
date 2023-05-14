import { createSelector } from '@ngrx/store';

import { mapAttempt } from '../../../../libs/game-logic/game-logic';

import { CodeAttemptsEntity, selectAllCodeAttempts } from '@code-break/code-attempts';
import { selectSecretCode } from '@code-break/game-configuration';




export const selectCodeAttemptResults = createSelector(
  selectAllCodeAttempts,
  selectSecretCode,
  (attempts: CodeAttemptsEntity[], secretCode: number[]) => attempts.map(a => (mapAttempt(a, secretCode)))
);
