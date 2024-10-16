/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */

import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest as observableCombineLatest, map, Observable, of as observableOf, } from 'rxjs';
import { AuthorizationDataService } from '../../../core/data/feature-authorization/authorization-data.service';
import { FeatureID } from '../../../core/data/feature-authorization/feature-id';
import { METADATA_EXPORT_SCRIPT_NAME, ScriptDataService, } from '../../../core/data/processes/script-data.service';
import {
  ExportBatchSelectorComponent
} from '../../dso-selector/modal-wrappers/export-batch-selector/export-batch-selector.component';
import {
  ExportMetadataSelectorComponent
} from '../../dso-selector/modal-wrappers/export-metadata-selector/export-metadata-selector.component';
import { MenuItemType } from '../menu-item-type.model';
import { AbstractExpandableMenuProvider, } from './helper-providers/expandable-menu-provider';
import { PartialMenuSection } from '../menu-provider';

@Injectable()
export class ExportMenuProvider extends AbstractExpandableMenuProvider {
  constructor(
    protected authorizationService: AuthorizationDataService,
    protected scriptDataService: ScriptDataService,
    protected modalService: NgbModal,
  ) {
    super();
  }

  public getTopSection(): Observable<PartialMenuSection> {
    return observableOf(
      {
        model: {
          type: MenuItemType.TEXT,
          text: 'menu.section.export',
        },
        icon: 'file-export',
        visible: true,
      },
    );
  }

  public getSubSections(): Observable<PartialMenuSection[]> {
    return observableCombineLatest([
      this.authorizationService.isAuthorized(FeatureID.AdministratorOf),
      this.scriptDataService.scriptWithNameExistsAndCanExecute(METADATA_EXPORT_SCRIPT_NAME),
    ]).pipe(
      map(([authorized, metadataExportScriptExists]) => {
        return [
          {
            visible: authorized && metadataExportScriptExists,
            model: {
              type: MenuItemType.ONCLICK,
              text: 'menu.section.export_metadata',
              function: () => {
                this.modalService.open(ExportMetadataSelectorComponent);
              },
            },
          },
          {
            visible: authorized && metadataExportScriptExists,
            model: {
              type: MenuItemType.ONCLICK,
              text: 'menu.section.export_batch',
              function: () => {
                this.modalService.open(ExportBatchSelectorComponent);
              },
            },
          },
        ];
      }),
    );
  }
}
