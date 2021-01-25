import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketStatusComponent } from './components/ticket-status/ticket-status.component';

const routes: Routes = [
    { path: '**', redirectTo: '/ticket-status', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'side', component: SidebarComponent },
    { path: 'ticket-status', component: TicketStatusComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
