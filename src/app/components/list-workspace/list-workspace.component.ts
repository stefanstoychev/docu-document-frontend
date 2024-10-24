import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import * as jsonpatch from 'fast-json-patch';
import { applyOperation, Operation } from 'fast-json-patch';
import { PalletService } from '../../services/pallet.service';
import { NestableListItem } from '../../models/nestable-list-item';


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

  constructor(private palletService: PalletService) {

    this.pallet = this.palletService.pallet;
  }

  nodeFocused(block: NestableListItem) {

    this.item = block;
  }

  treeChanged() {

    this.workspace.forEach((currentValue, index) =>{
      currentValue.templateBlock.path = "/"+index;
      this.updatePath("/"+index, currentValue);
    });
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
  }
}
