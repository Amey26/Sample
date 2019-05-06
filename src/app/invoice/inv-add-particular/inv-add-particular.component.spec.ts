import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvAddParticularComponent } from './inv-add-particular.component';

describe('InvAddParticularComponent', () => {
  let component: InvAddParticularComponent;
  let fixture: ComponentFixture<InvAddParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvAddParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvAddParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
