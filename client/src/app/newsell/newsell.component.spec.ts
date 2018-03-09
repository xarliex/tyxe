import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsellComponent } from './newsell.component';

describe('NewsellComponent', () => {
  let component: NewsellComponent;
  let fixture: ComponentFixture<NewsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
