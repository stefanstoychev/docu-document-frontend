import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { NestableListItem } from '../nested/nested.component';
import * as jsonpatch from 'fast-json-patch';
import { applyOperation, Operation } from 'fast-json-patch';
import { PalletService } from '../pallet.service';


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
    });
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
