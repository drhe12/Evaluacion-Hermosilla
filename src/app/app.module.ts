import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Angular Material
import { MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatRadioModule, 
  MatSelectModule, MatStepperModule, MatTableModule, MatToolbarModule } from '@angular/material';
// ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketStatusComponent } from './components/ticket-status/ticket-status.component';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ScrollingModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
