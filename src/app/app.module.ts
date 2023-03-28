import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { ThumbComponent } from './components/thumb/thumb.component';
import { QworkComponent } from './components/qwork/qwork.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThumbComponent,
    QworkComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    BenefitsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
