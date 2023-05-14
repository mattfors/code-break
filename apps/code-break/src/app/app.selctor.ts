import { createSelector } from '@ngrx/store';

import { mapAttempt } from '../../../../libs/game-logic/game-logic';

import { CodeAttemptsEntity, selectAllCodeAttempts } from '@code-break/code-attempts';
import { selectRows, selectSecretCode } from '@code-break/game-configuration';
import { CodeAttemptResult } from '@code-break/common-ui';


export const selectCodeAttemptResults = createSelector(
  selectAllCodeAttempts,
  selectSecretCode,
  (attempts: CodeAttemptsEntity[], secretCode: number[]) => attempts.map(a => (mapAttempt(a, secretCode)))
);

export const selectGameSuccess = createSelector(
  selectCodeAttemptResults,
  (attempts: CodeAttemptResult[]) =>
    attempts.map(a => a.results).some(r => r.every(e => e === 'exact')));

export const selectAttemptsMaxed = createSelector(
  selectRows,
  selectCodeAttemptResults,
  (rows: number, attempts: CodeAttemptResult[]) => rows <= attempts.length);

export const selectGameComplete = createSelector(
  selectGameSuccess,
  selectAttemptsMaxed,
  (gameSuccess: boolean, attemptsMaxed: boolean) => gameSuccess || attemptsMaxed);
