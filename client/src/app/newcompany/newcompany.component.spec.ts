import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompanyComponent } from './newcompany.component';

describe('NewcompanyComponent', () => {
  let component: NewcompanyComponent;
  let fixture: ComponentFixture<NewcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
