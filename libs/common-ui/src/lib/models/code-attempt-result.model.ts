import { CodeAttempt } from './code-attempt.model';

export interface CodeAttemptResult extends CodeAttempt {
  results: ('partial' | 'exact' | 'none')[];
}
