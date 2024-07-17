import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCharactersComponent } from './manage-characters.component';

describe('ManageCharactersComponent', () => {
  let component: ManageCharactersComponent;
  let fixture: ComponentFixture<ManageCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
