import { NgModule } from '@angular/core';
import { GameBoardGridComponent } from './game-board-grid/game-board-grid.component';
import { CodeAttemptViewComponent } from './code-attempt-view/code-attempt-view.component';
import { GameBoardComponent } from './game-board/game-board.component';


@NgModule({
  exports: [GameBoardGridComponent, CodeAttemptViewComponent, GameBoardComponent],
  imports: [GameBoardGridComponent, CodeAttemptViewComponent, GameBoardComponent],
})
export class CommonUiModule {}
