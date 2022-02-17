import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { MissionDetailComponent } from './components/mission-detail/mission-detail.component';
import { HomeComponent } from './components/home/home.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LaunchesService } from './services/launches.service';
import { MissionDetailService } from './services/missions.service'
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesListComponent,
    MissionDetailComponent,
    HomeComponent, 
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    LaunchesService,
    MissionDetailService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
