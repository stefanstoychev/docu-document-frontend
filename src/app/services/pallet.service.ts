import { Injectable } from '@angular/core';
import uischemaAsset from '../../assets/uischema.json';
import schemaAsset from '../../assets/schema.json';

import chapterUischemaAsset from '../../assets/chapter/uischema.json';
import chapterSchemaAsset from '../../assets/chapter/schema.json';

import textUischemaAsset from '../../assets/text/uischema.json';
import textSchemaAsset from '../../assets/text/schema.json';

import tableUischemaAsset from '../../assets/table/uischema.json';
import tableSchemaAsset from '../../assets/table/schema.json';

import groupUischemaAsset from '../../assets/group/uischema.json';
import groupSchemaAsset from '../../assets/group/schema.json';

import tocUischemaAsset from '../../assets/toc/uischema.json';
import tocSchemaAsset from '../../assets/toc/schema.json';

import { NestableListItem } from '../models/nestable-list-item';

@Injectable({
  providedIn: 'root'
})
export class PalletService {

  pallet: NestableListItem[] = [
    {
      action: "copy",
      children: [],
      templateBlock:
      {
        data: { type: "group", title: "Group" },
        uischema: groupUischemaAsset,
        schema: groupSchemaAsset,
        path: "/0"
      }
    },
    {
      action: "copy",
      templateBlock:
      {
        data: { type: "chapter", title: "Chapter" },
        uischema: chapterUischemaAsset,
        schema: chapterSchemaAsset,
        path: "/1"
      }
    },
    {
      action: "copy",
      templateBlock: {
        data: { type: "text", title: "Text" },
        uischema: textUischemaAsset,
        schema: textSchemaAsset,
        path: "/2"
      },
    },
    {
      action: "copy",
      templateBlock:
      {
        data: { type: "rich-text", title: "Rich text" },
        uischema: uischemaAsset,
        schema: schemaAsset,
        path: "/3"
      }
    },
    {
      action: "copy",
      templateBlock:
      {
        data: { type: "table", title: "Table" },
        uischema: tableUischemaAsset,
        schema: tableSchemaAsset,
        path: "/4"
      }
    },
    {
      action: "copy",
      templateBlock:
      {
        data: { type: "toc", title: "toc" },
        uischema: tocUischemaAsset,
        schema: tocSchemaAsset,
        path: "/5"
      }
    },
  ];

}
