import { BreadcrumbConfig } from '../../breadcrumbs/breadcrumb/breadcrumb-config.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DSOBreadcrumbsService } from './dso-breadcrumbs.service';
import { getFirstCompletedRemoteData, getRemoteDataPayload } from '../shared/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DSpaceObject } from '../shared/dspace-object.model';
import { ChildHALResource } from '../shared/child-hal-resource.model';
import { FollowLinkConfig } from '../../shared/utils/follow-link-config.model';
import { hasValue } from '../../shared/empty.util';
import { IdentifiableDataService } from '../data/base/identifiable-data.service';
import { getDSORoute } from '../../app-routing-paths';

/**
 * The class that resolves the BreadcrumbConfig object for a DSpaceObject
 */
@Injectable({
  providedIn: 'root',
})
export abstract class DSOBreadcrumbResolver<T extends ChildHALResource & DSpaceObject> implements Resolve<BreadcrumbConfig<T>> {
  protected constructor(
    protected breadcrumbService: DSOBreadcrumbsService,
    protected dataService: IdentifiableDataService<T>,
  ) {
  }

  /**
   * Method for resolving a breadcrumb config object
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns BreadcrumbConfig object
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BreadcrumbConfig<T>> {
    return this.resolveById(route.params.id);
  }

  /**
   * Method for resolving a breadcrumb by id
   *
   * @param uuid The uuid to resolve
   * @returns BreadcrumbConfig object
   */
  resolveById(uuid: string): Observable<BreadcrumbConfig<T>> {
    return this.dataService.findById(uuid, true, false, ...this.followLinks).pipe(
      getFirstCompletedRemoteData(),
      getRemoteDataPayload(),
      map((object: T) => {
        if (hasValue(object)) {
          return { provider: this.breadcrumbService, key: object, url: getDSORoute(object) };
        } else {
          return undefined;
        }
      })
    );
  }

  /**
   * Method that returns the follow links to already resolve
   * The self links defined in this list are expected to be requested somewhere in the near future
   * Requesting them as embeds will limit the number of requests
   */
  abstract get followLinks(): FollowLinkConfig<T>[];
}
