import { Component, Input } from '@angular/core';
import { TemplateBlock } from '../../models/template-block';
import { NestableListItem } from '../../models/nestable-list-item';

import masterdataUischemaAsset from '../../../assets/masterdata/uischema.json';
import masterdataSchemaAsset from '../../../assets/masterdata/schema.json';
import { LocalBrowserStorageService } from '../../services/local-browser-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrl: './masterdata.component.css'
})
export class MasterdataComponent {
  
  masterdata!: NestableListItem

  constructor(    private localStorage: LocalBrowserStorageService,
    private route: ActivatedRoute,
    private router: Router, ) {
    this.masterdata =     {
      action: "copy",
      children: [],
      templateBlock:
      {
        data: {},
        uischema: masterdataUischemaAsset,
        schema: masterdataSchemaAsset,
        path: "/0"
      }
    };
    
  }

  ngOnInit() {
    let jsonMasterdata = this.localStorage.get(this.masterdataKey());
    
    if(jsonMasterdata)
      this.masterdata = JSON.parse(jsonMasterdata);
  }
  
  dataChanged($event: NestableListItem) {
   this.localStorage.set(this.masterdataKey(), JSON.stringify(this.masterdata));
  }

  masterdataKey() {
    return "masterdata/" + this.route.snapshot.paramMap.get("id");
  }

}
