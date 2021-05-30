import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDescriptionComponent } from './body/profile/profile-description/profile-description.component';
import { ProfileComponent } from './body/profile/profile.component';
import { ProjectComponent } from './body/project/project.component';
import { ProjectDescriptionComponent } from './body/project/project-description/project-description.component';
import { ProjectDropdownComponent } from './body/project/project-dropdown/project-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProfileDescriptionComponent,
    ProfileComponent,
    ProjectComponent,
    ProjectDescriptionComponent,
    ProjectDropdownComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
