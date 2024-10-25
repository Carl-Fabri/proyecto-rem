import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDreamComponent } from './make-dream.component';

describe('MakeDreamComponent', () => {
  let component: MakeDreamComponent;
  let fixture: ComponentFixture<MakeDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeDreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
