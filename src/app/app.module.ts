import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFormsModule } from '@jsonforms/angular'
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { AngularSplitModule } from 'angular-split';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListWorkspaceComponent } from './components/list-workspace/list-workspace.component';
import { MaterialModule } from './material.module';
import NestedComponent from "./components/nested/nested.component";
import { ProjectService } from './services/project.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { LocalBrowserStorageService } from './services/local-browser-storage.service';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    ListWorkspaceComponent,
    ProjectsComponent,
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
    NestedComponent,
    FileSaverModule
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

