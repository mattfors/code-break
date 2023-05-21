import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should advance selection on color click', () => {
    expect(component.selectedColumn).toEqual(0);
    component.colorClicked(5)
    expect(component.selectedColumn).toEqual(1);
    component.colorClicked(5)
    expect(component.selectedColumn).toEqual(2);
  });

  it('should enable submit button after filling in all colors', () => {
    expect(component.disableSubmit).toBeTruthy();
    component.colorClicked(5)
    component.colorClicked(5)
    component.colorClicked(5)
    component.colorClicked(5)
    expect(component.disableSubmit).toBeFalsy();
  });

  it('should reset selection and active row data', () => {
    expect(component.selectedColumn).toEqual(0);
    expect(component.activeRowComplete).toBeFalsy();
    component.colorClicked(5)
    component.colorClicked(5)
    component.colorClicked(5)
    component.colorClicked(5)
    component.colorClicked(5)
    expect(component.selectedColumn).toEqual(1);
    expect(component.activeRowComplete).toBeTruthy();
    component.reset();
    expect(component.selectedColumn).toEqual(0);
    expect(component.activeRowComplete).toBeFalsy();
  });

  it('should reset selection and active row data on config change', () => {
    component.colorClicked(5);
    component.colorClicked(5);
    component.colorClicked(5);
    component.config = {columns: 2, rows: 2, numberOfColors: 2};
    expect(component.selectedColumn).toEqual(0);
    expect(component.activeRowData.length).toEqual(2);
  });

  it('should create array for the number of colors', () => {
    expect(component.colorOptions).toEqual([0,1,2,3,4,5])
  });

});
