import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This component is responsible for rendering a single row of results which indicates
 * to the user the correctness of a code attempt.
 */
@Component({
  selector: 'code-break-code-attempt-result-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-attempt-result-view.component.html',
  styleUrls: ['./code-attempt-result-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeAttemptResultViewComponent {

  /**
   * An array representing the results of analyzing a code attempt.
   */
  @Input()
  results: ('partial' | 'exact' | 'none')[] = [];
}
