import { Component, EventEmitter, Input, Output } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { NestableListItem } from '../nested/nested.component';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent {

  @Input("item")
  item!: NestableListItem;

  @Output() dataChanged = new EventEmitter<NestableListItem>();
  
  dataChange($event: any) {

    this.item.templateBlock.data = $event
    
    this.dataChanged.emit(this.item);
  }

  renderers = [
    ...angularMaterialRenderers,];

}
