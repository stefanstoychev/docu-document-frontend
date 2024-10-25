import { Component, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectModel } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  displayedColumns = ['actions', 'id', 'name'];
  dataSource : MatTableDataSource<ProjectModel>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private projectService: ProjectService) {
    this.dataSource = new MatTableDataSource<ProjectModel>(projectService.projects());
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openMasterdata(arg0: any) {
    throw new Error('Method not implemented.');
    }
}
