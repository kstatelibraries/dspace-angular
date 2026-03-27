import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HomeCoarComponent } from '../../../../app/home-page/home-coar/home-coar.component';
import { ThemedHomeNewsComponent } from '../../../../app/home-page/home-news/themed-home-news.component';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { ThemedTopLevelCommunityListComponent } from '../../../../app/home-page/top-level-community-list/themed-top-level-community-list.component';
import { SuggestionsPopupComponent } from '../../../../app/notifications/suggestions/popup/suggestions-popup.component';
import { ThemedConfigurationSearchPageComponent } from '../../../../app/search-page/themed-configuration-search-page.component';
import { KsuHomeBelowSearchBarComponent } from './ksu-home-below-search-bar/ksu-home-below-search-bar.component';

@Component({
  selector: 'ds-themed-home-page',
  styleUrls: ['../../../../app/home-page/home-page.component.scss'],
  templateUrl: './home-page.component.html',
  imports: [
    HomeCoarComponent,
    KsuHomeBelowSearchBarComponent,
    NgTemplateOutlet,
    SuggestionsPopupComponent,
    ThemedConfigurationSearchPageComponent,
    ThemedHomeNewsComponent,
    ThemedTopLevelCommunityListComponent,
    TranslateModule,
  ],
})
export class HomePageComponent extends BaseComponent {
}
