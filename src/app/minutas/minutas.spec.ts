import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minutas } from './minutas';

describe('Minutas', () => {
  let component: Minutas;
  let fixture: ComponentFixture<Minutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minutas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minutas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
