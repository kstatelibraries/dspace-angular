import { autoserialize, autoserializeAs, deserialize, inheritSerialization } from 'cerialize';
import { typedObject } from '../cache/builders/build-decorators';
import { excludeFromEquals } from '../utilities/equals.decorators';
import { FLAT_BROWSE_DEFINITION } from './flat-browse-definition.resource-type';
import { HALLink } from './hal-link.model';
import { ResourceType } from './resource-type';
import { SortOption } from './sort-option.model';
import { BrowseByDataType } from '../../browse-by/browse-by-switcher/browse-by-decorator';
import { BrowseDefinition } from './browse-definition.model';

@typedObject
@inheritSerialization(BrowseDefinition)
export class FlatBrowseDefinition extends BrowseDefinition {
  static type = FLAT_BROWSE_DEFINITION;

  /**
   * The object type
   */
  @excludeFromEquals
  type: ResourceType = FLAT_BROWSE_DEFINITION;

  @autoserialize
  sortOptions: SortOption[];

  @autoserializeAs('order')
  defaultSortOrder: string;

  @autoserializeAs('metadata')
  metadataKeys: string[];

  @autoserialize
  dataType: BrowseByDataType;

  get self(): string {
    return this._links.self.href;
  }

  @deserialize
  _links: {
    self: HALLink;
    entries: HALLink;
    items: HALLink;
  };

  getRenderType(): string {
    return this.dataType;
  }
}
