import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorldsComponent } from './manage-worlds.component';

describe('ManageWorldsComponent', () => {
  let component: ManageWorldsComponent;
  let fixture: ComponentFixture<ManageWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageWorldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
