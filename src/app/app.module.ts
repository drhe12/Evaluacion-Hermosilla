import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Angular Material
import { MatButtonModule, MatIconModule, MatStepperModule, MatTableModule, MatToolbarModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketStatusComponent } from './components/ticket-status/ticket-status.component';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HowToComponent } from './components/how-to/how-to.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TicketStatusComponent,
    GetHelpComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
