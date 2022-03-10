import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardDetailComponent } from './article-card-detail.component';

describe('ArticleCardDetailComponent', () => {
  let component: ArticleCardDetailComponent;
  let fixture: ComponentFixture<ArticleCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCardDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
