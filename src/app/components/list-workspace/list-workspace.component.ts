import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import * as jsonpatch from 'fast-json-patch';
import { applyOperation, Operation } from 'fast-json-patch';
import { PalletService } from '../../services/pallet.service';
import { NestableListItem } from '../../models/nestable-list-item';
import { LocalBrowserStorageService } from '../../services/local-browser-storage.service';
import { DocumentExportService } from '../../services/document-export.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-workspace',
  templateUrl: './list-workspace.component.html',
  styleUrl: './list-workspace.component.css'
})
export class ListWorkspaceComponent {


  title = 'Docu Docu';

  pallet!: NestableListItem[];

  workspace: NestableListItem[] = [];

  item!: NestableListItem;

  constructor(private palletService: PalletService, 
    private localStorage: LocalBrowserStorageService,
    private route: ActivatedRoute,
    private router: Router, 
    private documentExportService: DocumentExportService) {

    this.pallet = this.palletService.pallet;
  }

  workspaceKey() {
    return "workspace/" + this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    let jsonWorkspace = this.localStorage.get(this.workspaceKey());
    
    if(jsonWorkspace)
      this.workspace = JSON.parse(jsonWorkspace);
  }

  nodeFocused(block: NestableListItem) {

    this.item = block;
  }
  
  clear() {
    this.workspace = [];

    this.localStorage.set(this.workspaceKey(), JSON.stringify(this.workspace));
  }

  treeChanged() {

    this.workspace.forEach((currentValue, index) =>{
      currentValue.templateBlock.path = "/"+index;
      this.updatePath("/"+index, currentValue);
    });

    this.localStorage.set(this.workspaceKey(), JSON.stringify(this.workspace));
  }

  updatePath(path: string, item: NestableListItem) {
    if(item.children) {
      item.children.forEach((child, index) =>{
        let currentPath =  path + "/children/" + index;
        child.templateBlock.path = currentPath;
        
        this.updatePath(currentPath, child);
      });
    }
  }

  dataChanged(block: NestableListItem) {

    let patch: Operation[] = [
      { op: "replace", path: block.templateBlock.path, value: block },
    ];

    let document = jsonpatch.applyPatch(this.workspace, patch).newDocument;

    this.workspace = document;

    console.debug(document);
    this.localStorage.set(this.workspaceKey(), JSON.stringify(this.workspace));
  }

  export(){
    this.documentExportService.export(this.workspace)
  }
}
