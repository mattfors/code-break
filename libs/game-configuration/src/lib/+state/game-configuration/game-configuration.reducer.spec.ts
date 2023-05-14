import { Action } from '@ngrx/store';

import {
  initialGameConfigurationState,
  gameConfigurationReducer,
} from './game-configuration.reducer';

describe('GameConfiguration Reducer', () => {

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = gameConfigurationReducer(
        initialGameConfigurationState,
        action
      );

      expect(result).toBe(initialGameConfigurationState);
    });
  });
});
