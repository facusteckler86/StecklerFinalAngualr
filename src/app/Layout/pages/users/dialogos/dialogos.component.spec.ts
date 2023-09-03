import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogosComponent } from './dialogos.component';

describe('DialogosComponent', () => {
  let component: DialogosComponent;
  let fixture: ComponentFixture<DialogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogosComponent]
    });
    fixture = TestBed.createComponent(DialogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
