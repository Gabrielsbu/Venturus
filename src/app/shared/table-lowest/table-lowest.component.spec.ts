import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLowestComponent } from './table-lowest.component';

describe('TableLowestComponent', () => {
  let component: TableLowestComponent;
  let fixture: ComponentFixture<TableLowestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLowestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLowestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
