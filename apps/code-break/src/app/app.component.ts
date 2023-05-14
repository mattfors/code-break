import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { insertCodeAttempt } from '@code-break/code-attempts';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { selectGameConfigurationState, startGame } from '@code-break/game-configuration';
import { selectCodeAttemptResults } from './app.selctor';

@Component({
  selector: 'code-break-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'code-break';

  gameConfigurationState$: Observable<any>;
  attemptResults$;


  constructor(private store: Store<AppState>) {
    this.gameConfigurationState$ = store.pipe(select(selectGameConfigurationState));
    this.attemptResults$ = store.pipe(select(selectCodeAttemptResults));
    this.store.dispatch(startGame({columns: 2, rows: 10, numberOfColors: 2}));
  }

  onCodeSubmit(codes: number[]) {
    this.store.dispatch(insertCodeAttempt({codes}));
  }

}
