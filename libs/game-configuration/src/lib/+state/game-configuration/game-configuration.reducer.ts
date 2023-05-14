import { Action, createReducer, on } from '@ngrx/store';

import * as GameConfigurationActions from './game-configuration.actions';
import { GameConfiguration } from './game-configuration.models';
import { generateCode } from '../../../../../game-logic/game-logic';

export const GAME_CONFIGURATION_FEATURE_KEY = 'gameConfiguration';

export interface GameConfigurationPartialState {
  readonly [GAME_CONFIGURATION_FEATURE_KEY]: GameConfiguration;
}



export const initialGameConfigurationState: GameConfiguration = {
    columns: 0,
    rows: 0,
    numberOfColors: 0,
    secretCode: []
  };

const reducer = createReducer(
  initialGameConfigurationState,
  on(GameConfigurationActions.initGameConfiguration, (state) => state),
  on(GameConfigurationActions.startGame, (state, defaults) => {return {...defaults, secretCode: generateCode(defaults)}})
);

export function gameConfigurationReducer(
  state: GameConfiguration | undefined,
  action: Action
) {
  return reducer(state, action);
}
