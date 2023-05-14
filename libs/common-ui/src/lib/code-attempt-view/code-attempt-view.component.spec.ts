import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeAttemptViewComponent } from './code-attempt-view.component';

describe('CodeAttemptViewComponent', () => {
  let component: CodeAttemptViewComponent;
  let fixture: ComponentFixture<CodeAttemptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeAttemptViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeAttemptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
