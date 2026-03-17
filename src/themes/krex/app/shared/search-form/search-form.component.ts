import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFormComponent as BaseComponent } from 'src/app/shared/search-form/search-form.component';
import { BrowserOnlyPipe } from 'src/app/shared/utils/browser-only.pipe';

@Component({
  selector: 'ds-search-form',
   imports: [
    AsyncPipe,
    BrowserOnlyPipe,
    FormsModule,
    NgbTooltip,
    TranslateModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrls: ['../../../../../app/shared/search-form/search-form.component.scss'],
})
export class SearchFormComponent extends BaseComponent  {

}
