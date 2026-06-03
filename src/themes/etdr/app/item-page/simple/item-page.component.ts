import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ItemPageComponent as BaseComponent } from 'src/app/item-page/simple/item-page.component';
import { fadeInOut } from 'src/app/shared/animations/fade';

import { AccessByTokenNotificationComponent } from 'src/app/item-page/simple/access-by-token-notification/access-by-token-notification.component';
import { QaEventNotificationComponent } from 'src/app/item-page/simple/qa-event-notification/qa-event-notification.component';
import { NotifyRequestsStatusComponent } from 'src/app/item-page/simple/notify-requests-status/notify-requests-status-component/notify-requests-status.component';
import { ThemedItemAlertsComponent } from 'src/app/item-page/alerts/themed-item-alerts.component';
import { ItemVersionsComponent } from 'src/app/item-page/versions/item-versions.component';
import { ItemVersionsNoticeComponent } from 'src/app/item-page/versions/notice/item-versions-notice.component';

import { ErrorComponent } from 'src/app/shared/error/error.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';
import { ListableObjectComponentLoaderComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object-component-loader.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';

@Component({
  selector: 'ds-item-page',
  styleUrls: ['../../../../../app/item-page/simple/item-page.component.scss'],
  templateUrl: '../../../../../app/item-page/simple/item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
  imports: [
    AccessByTokenNotificationComponent,
    AsyncPipe,
    ErrorComponent,
    ItemVersionsComponent,
    ItemVersionsNoticeComponent,
    ListableObjectComponentLoaderComponent,
    NotifyRequestsStatusComponent,
    QaEventNotificationComponent,
    ThemedItemAlertsComponent,
    ThemedLoadingComponent,
    TranslateModule,
    VarDirective,
  ],
})
export class ItemPageComponent extends BaseComponent {
}