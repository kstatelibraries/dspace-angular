import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsuHomeBelowSearchBarComponent } from './ksu-home-below-search-bar.component';

describe('KsuHomeBelowSearchBarComponent', () => {
  let component: KsuHomeBelowSearchBarComponent;
  let fixture: ComponentFixture<KsuHomeBelowSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsuHomeBelowSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsuHomeBelowSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
