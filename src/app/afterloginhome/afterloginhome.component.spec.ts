import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginhomeComponent } from './afterloginhome.component';

describe('AfterloginhomeComponent', () => {
  let component: AfterloginhomeComponent;
  let fixture: ComponentFixture<AfterloginhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
