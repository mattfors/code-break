import { GameDefaults } from '../game-configuration/src';
import { CodeAttempt } from '../common-ui/src/lib/models/code-attempt.model';
import { CodeAttemptResult } from '../common-ui/src/lib/models/code-attempt-result.model';

/**
 * <p>Calculates the results of a code attempt based on matching logic. If a code is in the same position
 * as the secret code then it is considered an exact match. If the code is in the secret code but not in
 * the same position then it is considered a partial match. Exact matches take precedence over partial.</p>
 *
 * <p>For example, a secret code [1,2,3] with an attempt of [3,2,1] will have 1 exact match (codes: 2) and 2 partial
 * matches (codes: 1,3).</p>
 *
 * <p>All other codes in the attempt that are not in the secret code will result in a 'none' result. This indicates
 * the code is either not in the secret code at all or it's use has been satisfied by either a partial or exact
 * match.</p>
 *
 */
export function mapAttempt(attempt: CodeAttempt, secretCode: number[]): CodeAttemptResult {
  const results: ('partial' | 'exact' | 'none')[] = [],
    secretCodeCopy =  [...secretCode], codes = [...attempt.codes];

  // Find matches that occur at exact index since they have priority over partials
  for (let i = codes.length - 1; i >= 0; i--) {
    const codeIndex = secretCodeCopy.indexOf(codes[i]);
    if (secretCodeCopy[i] === codes[i]) {
      results.push('exact')
      codes.splice(i, 1);
      secretCodeCopy.splice(i, 1);
    }
  }

  // Check for remaining matches that occurred at any index
  codes.forEach((a: number, i) => {
    const codeIndex = secretCodeCopy.indexOf(a);
    if (codeIndex > -1) {
      results.push('partial')
      secretCodeCopy.splice(codeIndex, 1);
    } else {
      results.push('none')
    }
  });

  results.sort(resultSort);
  return {codes: attempt.codes, results};
}

const SORT_ORDER = {
  exact: 0,
  partial: 1,
  none: 2
};

/**
 * Jumbles the results, so it's not obvious to the user which attempt column
 * goes to which result.
 *
 */
function resultSort(a: ('partial' | 'exact' | 'none'), b: ('partial' | 'exact' | 'none')) {
  return SORT_ORDER[a] - SORT_ORDER[b];
}

/**
 * Generates a random code based on the number of colors and columns
 * configured on the game board.
 *
 * @param defaults
 */
export function generateCode(defaults: GameDefaults): number[] {
  return Array.from(
    {length: defaults.columns},
    () => Math.floor(Math.random() * defaults.numberOfColors));
}
