import { Component, OnInit } from '@angular/core';
import { google_links } from '../google_links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getResumeLink() {
    return google_links.resume_url;
  }
}
