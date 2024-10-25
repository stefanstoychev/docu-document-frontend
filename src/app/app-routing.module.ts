import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ListWorkspaceComponent } from './components/list-workspace/list-workspace.component';
import { MasterdataComponent } from './components/masterdata/masterdata.component';

export const routes: Routes = [
  { path: "", component: ProjectsComponent },
  { path: "workspace/:id", component: ListWorkspaceComponent },
  { path: "masterdata/:id", component: MasterdataComponent }
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