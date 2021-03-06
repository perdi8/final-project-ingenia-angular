import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListViewComponent } from './tag-list-view.component';

describe('TagListViewComponent', () => {
  let component: TagListViewComponent;
  let fixture: ComponentFixture<TagListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
