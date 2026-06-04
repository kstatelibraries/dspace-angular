import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MenuItemType } from '../menu-item-type.model';
import { LinkMenuItemModel } from '../menu-item/models/link.model';
import { TextMenuItemModel } from '../menu-item/models/text.model';
import { PartialMenuSection } from '../menu-provider.model';
import { AbstractExpandableMenuProvider } from './helper-providers/expandable-menu-provider';

@Injectable()
export class KsulNavigateMenuProvider extends AbstractExpandableMenuProvider {

  getTopSection(): Observable<PartialMenuSection> {
    return of({
      id: 'navigate_krex',
      visible: true,
      model: {
        type: MenuItemType.TEXT,
        text: 'menu.section.navigate',
      } as TextMenuItemModel,
    });
  }

  getSubSections(): Observable<PartialMenuSection[]> {
    return of([
      {
        id: 'navigate_krex_communities_collections',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.browse_global_communities_and_collections',
          link: '/community-list',
        } as LinkMenuItemModel,
      },
      {
        id: 'navigate_krex_etdr',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.navigate.etdr',
          link: '/communities/f152864b-1dab-4dae-a7d7-b5b6daacfc4b',
        } as LinkMenuItemModel,
      },
      {
        id: 'navigate_krex_rscad',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.navigate.rscad',
          link: '/communities/39b3c307-6d3f-4a83-aedd-e202d252a48b',
        } as LinkMenuItemModel,
      },
      {
        id: 'navigate_krex_digital_archives',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.navigate.digital_archives',
          link: '/communities/b69f09a9-b5ef-437e-ae79-27efe01a514e',
        } as LinkMenuItemModel,
      },
      {
        id: 'navigate_krex_search_all',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.navigate.search_all',
          link: '/search',
        } as LinkMenuItemModel,
      },
    ]);
  }
}