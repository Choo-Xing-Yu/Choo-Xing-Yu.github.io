import { Component, OnInit } from '@angular/core';
import { google_links } from '../../../google_links';

@Component({
  selector: 'app-project-accordion',
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.css'],
})
export class ProjectAccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects: {
    title: string;
    content: string;
    link: string;
  }[] = [
    {
      title: 'Training Mobile Application (RSAF)',
      content:
        'Achieved Gold under TEA 2019 by Singapore Productivity Association\n' +
        'Resulted in $74,802.84 annual savings for RSAF\n' +
        'Written in Outsystems\n' +
        'Sole Developer',
      link: google_links.training_rsaf_url,
    },
    {
      title: 'NUS Guitar Ensemble Attendance Bot',
      content:
        'Automated attendance taking of ~50 members\n' +
        'Provides analytical report on attendance for Exco\n' +
        'Written in Java with Telegram and GoogleSheets API\n' +
        'Sole Developer',
      link: google_links.attendance_bot_url,
    },
  ];
}
