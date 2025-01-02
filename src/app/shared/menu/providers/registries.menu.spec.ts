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
import { ScriptDataService } from '../../../core/data/processes/script-data.service';
import { ScriptServiceStub } from '../../testing/script-service.stub';
import { RegistriesMenuProvider } from './registries.menu';
import { PartialMenuSection } from '../menu-provider.model';

const expectedTopSection: PartialMenuSection = {
  visible: true,
  model: {
    type: MenuItemType.TEXT,
      text: 'menu.section.registries',
  },
  icon: 'list',
};

const expectedSubSections: PartialMenuSection[] = [
  {
    visible: true,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.registries_metadata',
      link: 'admin/registries/metadata',
    },
  },
  {
    visible: true,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.registries_format',
      link: 'admin/registries/bitstream-formats',
    },
  },
];

describe('RegistriesMenuProvider', () => {
  let provider: RegistriesMenuProvider;
  let authorizationServiceStub = new AuthorizationDataServiceStub();

  beforeEach(() => {
    spyOn(authorizationServiceStub, 'isAuthorized').and.returnValue(
      observableOf(true)
    );

    TestBed.configureTestingModule({
      providers: [
        RegistriesMenuProvider,
        { provide: AuthorizationDataService, useValue: authorizationServiceStub },
        { provide: ScriptDataService, useClass: ScriptServiceStub },
      ],
    });
    provider = TestBed.inject(RegistriesMenuProvider);
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
