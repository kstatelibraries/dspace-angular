import { Injectable } from '@angular/core';
import { ObjectCacheService } from '../cache/object-cache.service';
import { hasValue } from '../../shared/empty.util';
import {
  HIERARCHICAL_BROWSE_DEFINITION
} from '../shared/hierarchical-browse-definition.resource-type';
import { FLAT_BROWSE_DEFINITION } from '../shared/flat-browse-definition.resource-type';
import { HierarchicalBrowseDefinition } from '../shared/hierarchical-browse-definition.model';
import { FlatBrowseDefinition } from '../shared/flat-browse-definition.model';
import { DSOResponseParsingService } from './dso-response-parsing.service';
import { Serializer } from '../serializer';
import { BrowseDefinition } from '../shared/browse-definition.model';
import { BROWSE_DEFINITION } from '../shared/browse-definition.resource-type';

/**
 * A ResponseParsingService used to parse RawRestResponse coming from the REST API to a BrowseDefinition object
 */
@Injectable({
  providedIn: 'root',
})
export class BrowseResponseParsingService extends DSOResponseParsingService {
  constructor(
    protected objectCache: ObjectCacheService,
  ) {
    super(objectCache);
  }

  protected deserialize<ObjectDomain>(obj): any {
    const browseType: string = obj.browseType;
    if (obj.type === BROWSE_DEFINITION.value && hasValue(browseType)) {
      let serializer: Serializer<BrowseDefinition>;
      if (browseType === HIERARCHICAL_BROWSE_DEFINITION.value) {
        serializer = new this.serializerConstructor(HierarchicalBrowseDefinition);
      } else {
        serializer = new this.serializerConstructor(FlatBrowseDefinition);
      }
      return serializer.deserialize(obj);
    } else {
      return super.deserialize(obj);
    }
  }
}
