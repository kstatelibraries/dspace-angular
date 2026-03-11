import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderNavbarWrapperComponent as BaseComponent } from 'src/app/header-nav-wrapper/header-navbar-wrapper.component';
import { ThemedHeaderComponent } from '../../../../app/header/themed-header.component';

@Component({
  selector: 'ds-base-header-navbar-wrapper',
  templateUrl: './header-navbar-wrapper.component.html',
  styleUrls: ['./header-navbar-wrapper.component.scss'],
  imports: [
    AsyncPipe,
    NgClass,
    ThemedHeaderComponent,
  ],
})
export class HeaderNavbarWrapperComponent extends BaseComponent {}