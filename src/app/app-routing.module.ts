import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { TicketStatusComponent } from './components/ticket-status/ticket-status.component';

const routes: Routes = [
    { path: '', component: TicketStatusComponent },
    { path: 'how-to', component: HowToComponent },
    { path: 'get-help', component: GetHelpComponent },
    { path: 'ticket-status', component: TicketStatusComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
