import { Component, OnInit } from '@angular/core';
import { google_links } from '../../../google_links';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.css'],
})
export class ProfileDescriptionComponent {
  getAttendanceBotLink() {
    return google_links.attendance_bot_url;
  }
  getBassSLLink() {
    return google_links.bass_sl_url;
  }
}
