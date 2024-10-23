import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCardsComponent } from './identity-cards.component';

describe('IdentityCardsComponent', () => {
  let component: IdentityCardsComponent;
  let fixture: ComponentFixture<IdentityCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
