import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthMethodType } from '@dspace/core/auth/models/auth.method-type';

import { LoginPageComponent as BaseComponent } from 'src/app/login-page/login-page.component';
import { ThemedLogInComponent } from 'src/app/shared/log-in/themed-log-in.component';

/**
 * This component represents the login page
 */
@Component({
  selector: 'ds-login-page',
  imports: [ThemedLogInComponent, TranslateModule],
  styleUrls: ['./log-in.component.scss'],
  templateUrl: './log-in.component.html',
})
export class LoginComponent extends BaseComponent {
  protected readonly AuthMethodType = AuthMethodType;
}