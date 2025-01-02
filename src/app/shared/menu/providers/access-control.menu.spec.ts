/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */

import { TestBed } from '@angular/core/testing';
import { MenuItemType } from '../menu-item-type.model';
import { AuthorizationDataServiceStub } from '../../testing/authorization-service.stub';
import { of as observableOf } from 'rxjs';
import { AuthorizationDataService } from '../../../core/data/feature-authorization/authorization-data.service';
import { FeatureID } from '../../../core/data/feature-authorization/feature-id';
import { AccessControlMenuProvider } from './access-control.menu';
import { ScriptDataService } from '../../../core/data/processes/script-data.service';
import { ScriptServiceStub } from '../../testing/script-service.stub';
import { PartialMenuSection } from '../menu-provider.model';

const expectedTopSection: PartialMenuSection = {
  visible: true,
  model: {
    type: MenuItemType.TEXT,
      text: 'menu.section.access_control',
  },
  icon: 'key'
};

const expectedSubSections: PartialMenuSection[] = [
  {
    visible: true,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.access_control_people',
      link: '/access-control/epeople',
    },
  },
  {
    visible: false,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.access_control_groups',
      link: '/access-control/groups',
    },
  },
  {
    visible: true,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.access_control_bulk',
      link: '/access-control/bulk-access',
    },
  },
];

describe('AccessControlMenuProvider', () => {
  let provider: AccessControlMenuProvider;
  let authorizationServiceStub = new AuthorizationDataServiceStub();

  beforeEach(() => {
    spyOn(authorizationServiceStub, 'isAuthorized').and.callFake((id: FeatureID) => {
      if (id === FeatureID.CanManageGroups) {
        return observableOf(false);
      } else {
        return observableOf(true);
      }
    });

    TestBed.configureTestingModule({
      providers: [
        AccessControlMenuProvider,
        { provide: AuthorizationDataService, useValue: authorizationServiceStub },
        { provide: ScriptDataService, useClass: ScriptServiceStub },
      ],
    });
    provider = TestBed.inject(AccessControlMenuProvider);
  });

  it('should be created', () => {
    expect(provider).toBeTruthy();
  });

  it('getTopSection should return expected menu section', (done) => {
    provider.getTopSection().subscribe((section) => {
      expect(section).toEqual(expectedTopSection);
      done();
    });
  });

  it('getSubSections should return expected menu sections', (done) => {
    provider.getSubSections().subscribe((sections) => {
      expect(sections).toEqual(expectedSubSections);
      done();
    });
  });
});
