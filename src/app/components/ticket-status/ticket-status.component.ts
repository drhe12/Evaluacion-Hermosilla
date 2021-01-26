import { Component, OnInit } from '@angular/core';

export interface Ticket {
  date: string;
  goal: string;
  // content: string;
  deadline: string;
  status: string;
  partnert: string;
  satisfaction: number;
  sla: number;
}

@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrls: ['./ticket-status.component.css']
})
export class TicketStatusComponent implements OnInit {

  displayedColumns: string[] = ['date', 'goal', 'content', 'deadline', 'status', 'partnert', 'satisfaction', 'sla'];
  ticket: Ticket[] = [
    { date: '10/08/2019', goal: 'Social Media Management - Mantenimiento del perfil', 
    deadline: '15/08/2019', status: 'Open', partnert: 'Lorena Pastrana', satisfaction: 5, sla: 7 },
    { date: '10/08/2019', goal: 'Campaña de Marketing en redes - Lanzamiento de Perfil Social', 
    deadline: '15/08/2019', status: 'Close', partnert: 'Eduardo Vigil', satisfaction: 3, sla: 5 },
    { date: '10/08/2019', goal: 'Social Media Management - Mantenimiento del perfil', 
    deadline: '15/08/2019', status: 'Close', partnert: 'Lorena Pastrana', satisfaction: 4, sla: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   return this.tickets.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }

}
