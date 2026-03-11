import { Component } from '@angular/core';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import { ThemedSearchFormComponent } from '../../../../../app/shared/search-form/themed-search-form.component';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'ds-themed-home-news',
  imports: [ThemedSearchFormComponent, TranslateModule],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
})
export class HomeNewsComponent extends BaseComponent {

}
