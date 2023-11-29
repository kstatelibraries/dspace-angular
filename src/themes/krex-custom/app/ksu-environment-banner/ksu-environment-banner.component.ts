import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/config/app-config.interface';
@Component({
  selector: 'ds-ksu-environment-banner',
  templateUrl: './ksu-environment-banner.component.html',
  styleUrls: ['./ksu-environment-banner.component.scss']
})
export class KsuEnvironmentBannerComponent implements OnInit {
  bannerText = '';
  bannerEnabled = false;
  bannerStyle = {};

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {
  }

  ngOnInit(): void {
    const bannerConfig = this.appConfig['environmentBanner']; // eslint-disable-line @typescript-eslint/dot-notation

    this.bannerText = bannerConfig?.text;
    this.bannerEnabled = bannerConfig?.enabled;
    this.bannerStyle = { 'color': bannerConfig?.foregroundColor, 'background-color': bannerConfig?.backgroundColor };
  }
}
