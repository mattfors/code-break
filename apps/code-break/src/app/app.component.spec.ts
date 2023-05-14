import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
    }).compileComponents();
  });

  it(`should have as title 'code-break'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('code-break');
  });
});
