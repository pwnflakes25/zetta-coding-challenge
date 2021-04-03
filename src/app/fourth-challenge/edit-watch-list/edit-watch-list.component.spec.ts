import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWatchListComponent } from './edit-watch-list.component';

describe('EditWatchListComponent', () => {
  let component: EditWatchListComponent;
  let fixture: ComponentFixture<EditWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWatchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
