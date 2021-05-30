import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.css'],
})
export class ProfileDescriptionComponent {
  name: string = 'Choo Xing Yu';
  header: string = 'Computer Science Undergraduate at NUS';
  paragraph1: string =
    'Hi, my name is Xingyu! I am an inquisitive leaner who believes in the importance of a can-do attitude. ' +
    'From writing an entire mobile app alone in 2018 with no prior experience to playing n a guitar ensemble without any musical background. ' +
    'I am constantly pushing myself to try new things.';
  paragraph2: string = 'My latest project';
}
