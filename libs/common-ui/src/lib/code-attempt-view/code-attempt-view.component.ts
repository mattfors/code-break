import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';

/**
 * This component displays the color codes of an attempt.
 */
@Component({
  selector: 'code-break-code-attempt-view',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatRippleModule],
  templateUrl: './code-attempt-view.component.html',
  styleUrls: ['./code-attempt-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeAttemptViewComponent {

  /**
   * An array of codes
   */
  @Input()
  codes: number[] = [];

  @Input()
  columns = 0;

  @Input()
  enabled = false;

  @Input()
  selectedColumn: number | null = null;

  @Output()
  columnClick = new EventEmitter<number>();

  onCodeClick(index: number): void {
    if (this.enabled) {
      this.columnClick.emit(index);
    }
  }

  isColumnActive(index: number): boolean {
    return this.selectedColumn === index && this.enabled;
  }

  get codeColumns(): number[] {
    return [...this.codes, ...this.empties];
  }

  get empties(): number[] {
    return Array(Math.max(this.columns - this.codes.length, 0)).fill(undefined);
  }

}
