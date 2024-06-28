import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaPageComponent } from './receta-page.component';

describe('RecetaPageComponent', () => {
  let component: RecetaPageComponent;
  let fixture: ComponentFixture<RecetaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
