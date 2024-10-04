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

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatAutocompleteModule,
    AppRoutingModule
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

