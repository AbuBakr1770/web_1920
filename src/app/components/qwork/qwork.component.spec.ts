import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QworkComponent } from './qwork.component';

describe('QworkComponent', () => {
  let component: QworkComponent;
  let fixture: ComponentFixture<QworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
