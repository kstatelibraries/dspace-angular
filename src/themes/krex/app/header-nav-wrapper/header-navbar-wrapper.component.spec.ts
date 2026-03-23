import { 
  ComponentFixture, 
  TestBed,
} from '@angular/core/testing';

import { HeaderNavbarWrapperComponent } from './header-navbar-wrapper.component';

describe('HeaderNavbarWrapperComponent', () => {
  let component: HeaderNavbarWrapperComponent;
  let fixture: ComponentFixture<HeaderNavbarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavbarWrapperComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderNavbarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
