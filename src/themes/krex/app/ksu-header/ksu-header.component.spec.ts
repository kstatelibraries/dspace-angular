import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsuHeaderComponent } from './ksu-header.component';

describe('KsuHeaderComponent', () => {
  let component: KsuHeaderComponent;
  let fixture: ComponentFixture<KsuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
