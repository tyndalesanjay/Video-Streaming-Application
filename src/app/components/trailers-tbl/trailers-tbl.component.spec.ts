import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailersTblComponent } from './trailers-tbl.component';

describe('TrailersTblComponent', () => {
  let component: TrailersTblComponent;
  let fixture: ComponentFixture<TrailersTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailersTblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailersTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
