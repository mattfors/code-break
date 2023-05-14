import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeAttemptResultViewComponent } from './code-attempt-result-view.component';

describe('CodeAttemptResultViewComponent', () => {
  let component: CodeAttemptResultViewComponent;
  let fixture: ComponentFixture<CodeAttemptResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeAttemptResultViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeAttemptResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
