import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DndDraggableDirective,
  DndDragImageRefDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndHandleDirective,
  DndPlaceholderRefDirective,
  DropEffect,
} from 'ngx-drag-drop';
import { NestableListItem } from '../../models/nestable-list-item';

@Component({
  selector: 'dnd-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    DndPlaceholderRefDirective,
    NgForOf,
    DndDraggableDirective,
    NgIf,
    MatIconModule,
    DndHandleDirective,
    DndDragImageRefDirective,
    DndDropzoneDirective,
    NgTemplateOutlet,
  ],
})
export default class NestedComponent {
  
  @Output() nodeFocused = new EventEmitter<NestableListItem>();
  @Output() treeChanged = new EventEmitter<void>();
  
  @Input("nestableList")
  nestableList: NestableListItem[] = [];

  private currentDraggableEvent?: DragEvent;
  private currentDragEffectMsg?: string;

  constructor(private snackBarService: MatSnackBar) {}

  onClick(item: NestableListItem) {
    this.nodeFocused.emit(item);
  }

  onDragStart(event: DragEvent) {
    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open('Drag started!', undefined, { duration: 2000 });
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open(
      this.currentDragEffectMsg || `Drag ended!`,
      undefined,
      { duration: 2000 }
    );
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);

      if(event.dropEffect === 'copy')
        list[index].action = 'move'
    }

    this.treeChanged.emit();
  }
}