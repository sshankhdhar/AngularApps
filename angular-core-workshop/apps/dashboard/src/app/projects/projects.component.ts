import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects$: Observable<Object>;
  PrimaryColor = 'Red';

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.resetProject();
    this.PrimaryColor = 'Red';
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  createProject(project) {
    this.projectService.create(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project) {
    this.projectService.update(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }

  deleteProject(project) {
    this.projectService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
    this.resetProject();
  }
}
