import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtistaComponent } from './atista.component';

describe('AtistaComponent', () => {
  let component: AtistaComponent;
  let fixture: ComponentFixture<AtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
