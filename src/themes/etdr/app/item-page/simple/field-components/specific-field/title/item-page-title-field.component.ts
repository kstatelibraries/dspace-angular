import { Component } from '@angular/core';
import {
  ItemPageTitleFieldComponent as BaseComponent
} from '../../../../../../../../app/item-page/simple/field-components/specific-field/title/item-page-title-field.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-item-page-title-field',
  // templateUrl: './item-page-title-field.component.html',
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: '../../../../../../../../app/item-page/simple/field-components/specific-field/title/item-page-title-field.component.html',
})
export class ItemPageTitleFieldComponent extends BaseComponent {
}
