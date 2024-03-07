import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARDSComponent } from './cards.component';

describe('CARDSComponent', () => {
  let component: CARDSComponent;
  let fixture: ComponentFixture<CARDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CARDSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CARDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
