import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypnoproyeccionesComponent } from './hypnoproyecciones.component';

describe('HypnoproyeccionesComponent', () => {
  let component: HypnoproyeccionesComponent;
  let fixture: ComponentFixture<HypnoproyeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HypnoproyeccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypnoproyeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
