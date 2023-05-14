import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoardGridComponent } from './game-board-grid.component';

describe('GameBoardGridComponent', () => {
  let component: GameBoardGridComponent;
  let fixture: ComponentFixture<GameBoardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
