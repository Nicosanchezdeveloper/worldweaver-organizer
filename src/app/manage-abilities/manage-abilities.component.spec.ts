import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbilitiesComponent } from './manage-abilities.component';

describe('ManageAbilitiesComponent', () => {
  let component: ManageAbilitiesComponent;
  let fixture: ComponentFixture<ManageAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageAbilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
