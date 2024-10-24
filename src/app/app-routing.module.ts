import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ListWorkspaceComponent } from './components/list-workspace/list-workspace.component';

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