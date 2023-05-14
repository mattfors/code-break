import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeAttemptViewComponent } from '../code-attempt-view/code-attempt-view.component';
import { GameBoardGridComponent } from '../game-board-grid/game-board-grid.component';
import { GameBoardGridDataRow } from '../game-board-grid/game-board-grid.models';
import { GameDefaults } from '@code-break/game-configuration';

@Component({
  selector: 'code-break-game-board',
  standalone: true,
  imports: [CommonModule, CodeAttemptViewComponent, GameBoardGridComponent],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {

  @Input()
  rowData: GameBoardGridDataRow[] = [];

  @Input()
  set config(config: GameDefaults) {
    this._config = config;
    this.activeRowData = Array(this._config.columns) as number[];
  }
  _config: GameDefaults = {columns: 4, rows: 10, numberOfColors: 6};

  @Input()
  enabled = true;

  @Output()
  codeSubmit: EventEmitter<number[]> = new EventEmitter<number[]>();

  activeRowData: number[] = [];
  selectedColumn = 0;

  get colorOptions(): number[] {
    return Array.from({ length: this._config.numberOfColors }, (v, i) => i);
  }



  submitAttempt() {
    this.codeSubmit.emit(this.activeRowData);
    this.activeRowData = Array(this._config.columns) as number[];
    this.selectedColumn = 0;
  }

  colorClicked(color: number) {
    this.activeRowData[this.selectedColumn] = color;
    this.selectedColumn = (this.selectedColumn + 1) % this._config.columns;
  }

}
