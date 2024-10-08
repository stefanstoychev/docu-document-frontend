import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFormsModule } from '@jsonforms/angular'
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { FormExampleComponent } from './form-example/form-example.component';
import { AngularSplitModule } from 'angular-split';
import { ListPaletteComponent } from "./list-palette/list-palette.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListWorkspaceComponent } from './list-workspace/list-workspace.component';
import { MaterialModule } from './material.module';
import NestedComponent from "./nested/nested.component";

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    ListPaletteComponent,
    ListWorkspaceComponent
  ],
  imports: [
    AngularSplitModule,
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    AppRoutingModule,
    DragDropModule,
    MaterialModule,
    NestedComponent
],
  schemas: [],
  bootstrap: [AppComponent],
  providers: [
    //provideAnimationsAsync()
  ],
  exports: []
})
export class AppModule {
}
export { AppComponent };

