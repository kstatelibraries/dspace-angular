import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BooleanValueInputComponent } from './boolean-value-input.component';

describe('BooleanValueInputComponent', () => {
  let component: BooleanValueInputComponent;
  let fixture: ComponentFixture<BooleanValueInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      declarations: [BooleanValueInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanValueInputComponent);
    component = fixture.componentInstance;
    spyOn(component.updateValue, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true onInit', () => {
    expect(component.updateValue.emit).toHaveBeenCalledWith(true);
  });
});
