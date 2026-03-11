import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'
import { Component } from '@angular/core';
import { SearchFormComponent as BaseComponent } from 'src/app/shared/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserOnlyPipe } from 'src/app/shared/utils/browser-only.pipe';

@Component({
  selector: 'ds-search-form',
  imports: [ 
    AsyncPipe, 
    TranslateModule,
    FormsModule,
    NgbTooltipModule,
    TranslateModule,
    BrowserOnlyPipe, 
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent extends BaseComponent  {

}
