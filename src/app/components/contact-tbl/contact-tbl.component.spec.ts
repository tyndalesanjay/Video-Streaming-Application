import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTblComponent } from './contact-tbl.component';

describe('ContactTblComponent', () => {
  let component: ContactTblComponent;
  let fixture: ComponentFixture<ContactTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
