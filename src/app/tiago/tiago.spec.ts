import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiago } from './tiago';

describe('Tiago', () => {
  let component: Tiago;
  let fixture: ComponentFixture<Tiago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tiago],
    }).compileComponents();

    fixture = TestBed.createComponent(Tiago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
