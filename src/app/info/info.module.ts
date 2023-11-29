import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EndUserAgreementComponent } from './end-user-agreement/end-user-agreement.component';
import { InfoRoutingModule } from './info-routing.module';
import { EndUserAgreementContentComponent } from './end-user-agreement/end-user-agreement-content/end-user-agreement-content.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyContentComponent } from './privacy/privacy-content/privacy-content.component';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { ThemedFeedbackFormComponent } from './feedback/feedback-form/themed-feedback-form.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';

import { AboutComponent } from './about/about.component';
import { LicenseComponent } from './license/license.component';
import { SymbolsGudielinesComponent } from './guidelines/symbols/symbols.component';
import { AttachmentsGuidelinesComponent } from './guidelines/attachments/attachments.component';
import { AuthorsGuidelinesComponent } from './guidelines/authors/authors.component';
import { KeywordsGuidelinesComponent } from './guidelines/keywords/keywords.component';
import { PoliciesComponent } from './policies/policies.component';

const DECLARATIONS = [
  EndUserAgreementComponent,
  ThemedEndUserAgreementComponent,
  EndUserAgreementContentComponent,
  PrivacyComponent,
  PrivacyContentComponent,
  ThemedPrivacyComponent,
  FeedbackComponent,
  FeedbackFormComponent,
  ThemedFeedbackFormComponent,
  ThemedFeedbackComponent,
  AboutComponent,
  LicenseComponent,
  SymbolsGudielinesComponent,
  AttachmentsGuidelinesComponent,
  AuthorsGuidelinesComponent,
  KeywordsGuidelinesComponent,
  PoliciesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfoRoutingModule,
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [FeedbackGuard]
})
export class InfoModule {
}
