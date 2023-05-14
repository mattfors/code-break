import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromCodeAttempts from './+state/code-attempts/code-attempts.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromCodeAttempts.CODE_ATTEMPTS_FEATURE_KEY,
      fromCodeAttempts.codeAttemptsReducer
    )
  ],
})
export class CodeAttemptsModule {}
