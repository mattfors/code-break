import { CodeAttemptsEntity } from './code-attempts.models';
import {
  codeAttemptsAdapter,
  CodeAttemptsPartialState,
  initialCodeAttemptsState,
} from './code-attempts.reducer';
import * as CodeAttemptsSelectors from './code-attempts.selectors';

describe('CodeAttempts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCodeAttemptsId = (it: CodeAttemptsEntity) => it.id;
  const createCodeAttemptsEntity = (id: string) =>
    ({
      id,
    } as CodeAttemptsEntity);

  let state: CodeAttemptsPartialState;

  beforeEach(() => {
    state = {
      codeAttempts: codeAttemptsAdapter.setAll(
        [
          createCodeAttemptsEntity('PRODUCT-AAA'),
          createCodeAttemptsEntity('PRODUCT-BBB'),
          createCodeAttemptsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCodeAttemptsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('CodeAttempts Selectors', () => {
    it('selectAllCodeAttempts() should return the list of CodeAttempts', () => {
      const results = CodeAttemptsSelectors.selectAllCodeAttempts(state);
      const selId = getCodeAttemptsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });




  });
});
