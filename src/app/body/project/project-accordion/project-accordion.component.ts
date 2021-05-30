import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-accordion',
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.css'],
})
export class ProjectAccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects: { header: string; description: string; link: string }[] = [
    {
      header: 'Training Mobile Application (RSAF)',
      description: '',
      link: '',
    },
    {
      header: 'NUS Guitar Ensemble Attendance Bot',
      description: '',
      link: '',
    },
  ];
}
