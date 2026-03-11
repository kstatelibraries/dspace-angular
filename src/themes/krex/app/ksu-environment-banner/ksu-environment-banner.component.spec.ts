import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsuEnvironmentBannerComponent } from './ksu-environment-banner.component';

describe('KsuEnvironmentBannerComponent', () => {
  let component: KsuEnvironmentBannerComponent;
  let fixture: ComponentFixture<KsuEnvironmentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsuEnvironmentBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsuEnvironmentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
