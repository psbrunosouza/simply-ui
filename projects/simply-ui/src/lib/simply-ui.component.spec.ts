import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyUiComponent } from './simply-ui.component';

describe('SimplyUiComponent', () => {
  let component: SimplyUiComponent;
  let fixture: ComponentFixture<SimplyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplyUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
