import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects() : Array<string> {
    return [
      "project 1",
      "project 2",
    ];
  }
}
