import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapamundiComponent } from './mapamundi.component';

describe('MapamundiComponent', () => {
  let component: MapamundiComponent;
  let fixture: ComponentFixture<MapamundiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapamundiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapamundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
