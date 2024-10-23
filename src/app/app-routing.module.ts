import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';
import { ListWorkspaceComponent } from './list-workspace/list-workspace.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: "projects", component: ProjectsComponent },
  { path: "", component: ListWorkspaceComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }