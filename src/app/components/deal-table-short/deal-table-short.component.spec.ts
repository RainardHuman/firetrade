import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTableShortComponent } from './deal-table-short.component';

describe('DealTableShortComponent', () => {
  let component: DealTableShortComponent;
  let fixture: ComponentFixture<DealTableShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealTableShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealTableShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
