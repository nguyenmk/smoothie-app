import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeActionComponent } from './recipe-action.component';

describe('RecipeActionComponent', () => {
  let component: RecipeActionComponent;
  let fixture: ComponentFixture<RecipeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
