import { Component } from '@angular/core';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';
import { KsuHeaderComponent } from '../ksu-header/ksu-header.component';
import { KsuEnvironmentBannerComponent } from '../ksu-environment-banner/ksu-environment-banner.component';
import { ThemedNavbarComponent } from '../../../../app/navbar/themed-navbar.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'
import { SearchNavbarComponent } from 'src/app/search-navbar/search-navbar.component';
import { ThemedSearchNavbarComponent } from 'src/app/search-navbar/themed-search-navbar.component';
import { LangSwitchComponent } from 'src/app/shared/lang-switch/lang-switch.component';
import { ContextHelpToggleComponent } from 'src/app/header/context-help-toggle/context-help-toggle.component';

import { AuthNavMenuComponent } from 'src/app/shared/auth-nav-menu/auth-nav-menu.component';

@Component({
  selector: 'ds-header',
  imports: [KsuHeaderComponent, 
    KsuEnvironmentBannerComponent, 
    ThemedSearchNavbarComponent, 
    LangSwitchComponent,
    ContextHelpToggleComponent, 
    // ImpersonateNavbarComponent,
    ThemedNavbarComponent,
    // SearchNavbarComponent,
    AuthNavMenuComponent,
    AsyncPipe, 
    TranslateModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent extends BaseComponent {
    public isNavBarCollapsed$: Observable<boolean>;

  ngOnInit() {
    super.ngOnInit();
    this.isNavBarCollapsed$ = this.menuService.isMenuCollapsed(this.menuID);
  }

}
