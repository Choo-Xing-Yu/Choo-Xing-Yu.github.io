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
import { ProjectAccordionComponent } from './body/project/project-accordion/project-accordion.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './footer/contact/contact.component';
import { IconsModule } from './icons/icons.module';

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
    ProjectAccordionComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, NgbModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
