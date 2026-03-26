import { Component } from '@angular/core';

import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';
import { KsuFooterComponent } from '../ksu-footer/ksu-footer.component';

@Component({
  selector: 'ds-themed-footer',
  // styleUrls: ['footer.component.scss'],
  styleUrls: ['../../../../app/footer/footer.component.scss'],
  templateUrl: 'footer.component.html',
  imports: [
    KsuFooterComponent,
  ],
})
export class FooterComponent extends BaseComponent {
  // This line will enable the top footer in your theme
  showTopFooter = true;
}
