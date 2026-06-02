import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Imported map operator
import { AuthService } from '../../core/auth/auth.service';
import { AuthMethodsService } from '../../core/auth/auth-methods.service';
import { AuthMethod } from '../../core/auth/models/auth.method';
import { AuthMethodType } from '../../core/auth/models/auth.method-type';
import { getAuthenticationError,
  isAuthenticated,
  isAuthenticationLoading,
} from '../../core/auth/selectors';
import { CoreState } from '../../core/core-state.model';
import { hasValue, isEmpty } from '../empty.util'; 
import { ThemedLoadingComponent } from '../loading/themed-loading.component';
import { LogInContainerComponent } from './container/log-in-container.component';
import { AUTH_METHOD_FOR_DECORATOR_MAP } from './methods/log-in.methods-decorator';

@Component({
  selector: 'ds-base-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    LogInContainerComponent,
    ThemedLoadingComponent,
  ],
})
export class LogInComponent implements OnInit {
  /**
   * A boolean representing if LogInComponent is in a standalone page
   * @type {boolean}
   */
  @Input() isStandalonePage: boolean;

  /**
   * Method to exclude from the list of authentication methods
   */
  @Input() excludedAuthMethod: AuthMethodType;
  /**
   *  Weather or not to show the register link
   */
  @Input() showRegisterLink = true;

 /**
   * Specific methods allowed to be rendered (empty array allows all)
   */
  @Input() allowedAuthMethods: AuthMethodType[] = [];

  /**
   * The list of authentication methods available
   * @type {Observable<AuthMethod[]>}
   */
  public authMethods: Observable<AuthMethod[]>;

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;

  /**
   * True if the authentication is loading.
   * @type {boolean}
   */
  public loading: Observable<boolean>;

  constructor(private store: Store<CoreState>,
              private authService: AuthService,
              private authMethodsService: AuthMethodsService,
  ) {
  }

  ngOnInit(): void {
    // KSUl-MODIFICATION Fetch backend methods and map-filter them based on allowedAuthMethods rules
    this.authMethods = this.authMethodsService.getAuthMethods(AUTH_METHOD_FOR_DECORATOR_MAP, this.excludedAuthMethod).pipe(
      map((methods: AuthMethod[]) => methods.filter((authMethod: AuthMethod) => 
        isEmpty(this.allowedAuthMethods) || this.allowedAuthMethods.includes(authMethod.authMethodType)
      ))
    );

    // set loading
    this.loading = this.store.pipe(select(isAuthenticationLoading));

    // set isAuthenticated
    this.isAuthenticated = this.store.pipe(select(isAuthenticated));

    // Clear the redirect URL if an authentication error occurs and this is not a standalone page
    this.store.pipe(select(getAuthenticationError)).subscribe((error) => {
      if (hasValue(error) && !this.isStandalonePage) {
        this.authService.clearRedirectUrl();
      }
    });
  }

}
