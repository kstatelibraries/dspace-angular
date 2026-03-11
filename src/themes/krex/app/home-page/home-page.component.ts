import { Component } from '@angular/core';
import { HomePageComponent as BaseComponent } from 'src/app/home-page/home-page.component';
import { KsuHomeBelowSearchBarComponent } from './ksu-home-below-search-bar/ksu-home-below-search-bar.component';
import { RecentItemListComponent } from 'src/app/home-page/recent-item-list/recent-item-list.component';
import { HomeNewsComponent } from './home-news/home-news.component';
@Component({
  selector: 'ds-home-page',
  imports: [
    KsuHomeBelowSearchBarComponent, 
    RecentItemListComponent,
    HomeNewsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent extends BaseComponent {

}
