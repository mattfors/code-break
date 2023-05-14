import { createAction, props } from '@ngrx/store';
import { GameConfiguration, GameDefaults } from './game-configuration.models';

export const initGameConfiguration = createAction('[GameConfiguration] Init Game Configuration', props<GameConfiguration>());
export const startGame = createAction('[GameConfiguration] Start Game', props<GameDefaults>());
