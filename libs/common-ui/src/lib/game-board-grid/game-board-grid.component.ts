import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeAttemptResultViewComponent } from '../code-attempt-result-view/code-attempt-result-view.component';
import { CodeAttemptViewComponent } from '../code-attempt-view/code-attempt-view.component';

import { GameBoardConfiguration, GameBoardGridDataRow } from './game-board-grid.models';


@Component({
  selector: 'code-break-game-board-grid',
  standalone: true,
  imports: [CommonModule, CodeAttemptViewComponent, CodeAttemptResultViewComponent],
  templateUrl: './game-board-grid.component.html',
  styleUrls: ['./game-board-grid.component.scss'],
})
export class GameBoardGridComponent {

  @Input()
  rowData: GameBoardGridDataRow[] = [];

  @Input()
  config: GameBoardConfiguration = {
    columns: 4,
    rows: 10
  };

  @Input()
  activeRowData: number[] = [];

  @Output()
  columnClick = new EventEmitter<number>();

  @Input()
  selectedColumn = 0;

  get gridRows(): GameBoardGridDataRow[] {
    return [...this.rowData, ...this.emptyCodeAttempts()].reverse();
  }

  get selectedRow(): number {
    return this.config.rows - this.rowData.length - 1;
  }

  onColumnClick(index: number): void {
    this.columnClick.emit(index);
  }

  private emptyCodeAttempts(): GameBoardGridDataRow[] {
    return Array(Math.max(this.config.rows - this.rowData.length, 0)).fill(this.emptyCodeAttempt());
  }

  private emptyCodeAttempt(): GameBoardGridDataRow {
    return {codes: Array(this.config.columns).fill('none'), results: Array(this.config.columns).fill('none')};
  }

}
