import { GameConfiguration } from '@code-break/game-configuration';
import { CodeAttemptsEntity } from '@code-break/code-attempts';

export interface AppState {
  readonly attempts: CodeAttemptsEntity[];
  readonly configuration: GameConfiguration;
}
