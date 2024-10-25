import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects() : ProjectModel[] {
    return [
      { id: "1", name: "project 1", },
      { id: "2", name: "project 2", },
      { id: "3", name: "project 3", },
    ];
  }
}
