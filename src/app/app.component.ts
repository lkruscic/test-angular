import { Component } from '@angular/core';
import { TicketService } from './temp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';

  /**
   *
   */
  constructor(private ticketService: TicketService) {
    
     ticketService.getTicketDetails('1', '1').then(ticket => {
      console.log(ticket);
    }); 
  }
  
}
