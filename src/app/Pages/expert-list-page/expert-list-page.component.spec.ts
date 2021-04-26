import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertListPageComponent } from './expert-list-page.component';

describe('ExpertListPageComponent', () => {
  let component: ExpertListPageComponent;
  let fixture: ComponentFixture<ExpertListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
