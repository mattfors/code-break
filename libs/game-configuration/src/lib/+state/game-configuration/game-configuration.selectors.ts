import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAME_CONFIGURATION_FEATURE_KEY, } from './game-configuration.reducer';
import { GameConfiguration } from './game-configuration.models';

export const selectGameConfigurationState =
  createFeatureSelector<GameConfiguration>(GAME_CONFIGURATION_FEATURE_KEY);

export const selectSecretCode = createSelector(
  selectGameConfigurationState,
  (state: GameConfiguration) => state.secretCode
);
