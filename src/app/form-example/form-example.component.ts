import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';

import uischemaAsset from '../../assets/uischema.json';
import schemaAsset from '../../assets/schema.json';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent {

  data = '';
  renderers = [
    ...angularMaterialRenderers,];
  schema = schemaAsset;
  uischema = uischemaAsset;
}
