import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MenuItemType } from '../menu-item-type.model';
import { LinkMenuItemModel } from '../menu-item/models/link.model';
import { PartialMenuSection } from '../menu-provider.model';
import { AbstractMenuProvider } from '../menu-provider.model';

@Injectable()
export class KsulInfoMenuProvider extends AbstractMenuProvider {

  getSections(): Observable<PartialMenuSection[]> {
    return of([
      {
        id: 'krex_menu_about',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.about',
          link: '/info/about',
        } as LinkMenuItemModel,
      },
      {
        id: 'krex_menu_policies',
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.policies',
          link: '/info/policies',
        } as LinkMenuItemModel,
      },
    ]);
  }
}