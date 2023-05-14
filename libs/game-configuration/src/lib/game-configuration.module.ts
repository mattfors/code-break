import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromGameConfiguration from './+state/game-configuration/game-configuration.reducer';
import { CodeAttemptsModule } from '@code-break/code-attempts';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromGameConfiguration.GAME_CONFIGURATION_FEATURE_KEY,
      fromGameConfiguration.gameConfigurationReducer
    ),
    CodeAttemptsModule
  ],
})
export class GameConfigurationModule {}
