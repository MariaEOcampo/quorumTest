import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewsComponent } from './top-views.component';

describe('TopViewsComponent', () => {
  let component: TopViewsComponent;
  let fixture: ComponentFixture<TopViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
