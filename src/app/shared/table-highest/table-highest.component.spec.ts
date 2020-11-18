import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHighestComponent } from './table-highest.component';

describe('TableHighestComponent', () => {
  let component: TableHighestComponent;
  let fixture: ComponentFixture<TableHighestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHighestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHighestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
