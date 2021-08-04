import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { google_links } from '../../../google_links';
const image_folder_dir = '../../../../assets/images/';

@Component({
  selector: 'app-project-accordion',
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectAccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects: {
    title: string;
    contents: Array<string>;
    url: string;
    img_path: string;
    is_shown: boolean;
  }[] = [
    {
      title: 'Training Mobile Application (RSAF)',
      contents: [
        'Achieved Gold under TEA 2019 by Singapore Productivity Association',
        'Resulted in $74,802.84SGD annual savings for RSAF',
        'Written in Outsystems',
        'Sole Developer',
      ],
      url: google_links.training_rsaf_url,
      img_path: image_folder_dir + 'rsaf140.jpeg',
      is_shown: true,
    },
    {
      title: 'Tipsy Collective Customer Management System (CMS)',
      contents: [
        'Developed CMS and Mobile Application Backend',
        'Migrated both Backend from ExpressJS to NestJS',
        'Written in NodeJS and Typescript (NestJS)',
        'Lead the Backend Development with 2 other Backend Developers',
      ],
      url: google_links.tipsy_url,
      img_path: image_folder_dir + 'tipc.jpg',
      is_shown: false,
    },
    {
      title: 'NUS Guitar Ensemble Attendance Bot',
      contents: [
        'Automated attendance taking of ~50 members',
        'Provides analytical report on attendance for Exco',
        'Written in Java with Telegram and GoogleSheets API',
        'Sole Developer',
      ],
      url: google_links.attendance_bot_url,
      img_path: image_folder_dir + 'genuslogo.png',
      is_shown: false,
    },
  ];
}
