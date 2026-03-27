import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthMethodType } from 'src/app/core/auth/models/auth.method-type';
import { LoginPageComponent as BaseComponent } from 'src/app/login-page/login-page.component';
import { ThemedLogInComponent } from 'src/app/shared/log-in/themed-log-in.component';

@Component({
  selector: 'ds-themed-login-page',
  imports: [
    ThemedLogInComponent,
    TranslateModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent extends BaseComponent {
  public readonly AuthMethodType = AuthMethodType;
}
