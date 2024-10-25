import { Component, Input } from '@angular/core';
import { TemplateBlock } from '../../models/template-block';
import { NestableListItem } from '../../models/nestable-list-item';

import masterdataUischemaAsset from '../../../assets/masterdata/uischema.json';
import masterdataSchemaAsset from '../../../assets/masterdata/schema.json';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrl: './masterdata.component.css'
})
export class MasterdataComponent {

  /**
   *
   */
  constructor() {
    this.masterdata =     {
      action: "copy",
      children: [],
      templateBlock:
      {
        data: { type: "masterdata", title: "Masterdata" },
        uischema: masterdataUischemaAsset,
        schema: masterdataSchemaAsset,
        path: "/0"
      }
    };
    
  }
  
  dataChanged($event: NestableListItem) {
    throw new Error('Method not implemented.');
  }

  masterdata!: NestableListItem
}
