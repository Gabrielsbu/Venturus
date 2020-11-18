import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './modules/main/main.component';
import { CreateTeamComponent } from './modules/create-team/create-team.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TableTeamsComponent } from './shared/table-teams/table-teams.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TableHighestComponent } from './shared/table-highest/table-highest.component';
import { TableLowestComponent } from './shared/table-lowest/table-lowest.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateTeamComponent,
    HeaderComponent,
    FooterComponent,
    TableTeamsComponent,
    TableHighestComponent,
    TableLowestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
