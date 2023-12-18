import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  title = 'Projects';

  projects = [
    { name: 'PDS', description: "Application to help people locate potholes"},
    { name: 'SDP', description: "Application to help people locate potholes"}
  ]
  selectedProject: { name: string; description: string } | null = null;
  selectProject(project: any) {
    this.selectedProject = project;
  }
}