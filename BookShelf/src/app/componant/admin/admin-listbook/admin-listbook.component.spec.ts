import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListbookComponent } from './admin-listbook.component';

describe('AdminListbookComponent', () => {
  let component: AdminListbookComponent;
  let fixture: ComponentFixture<AdminListbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminListbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
