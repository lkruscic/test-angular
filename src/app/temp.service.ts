import { Injectable } from '@angular/core';
import { Observable, delay, lastValueFrom, of } from 'rxjs';

class Ticket {
  id: string = '';
  title: string = '';
}
class Site {
  id: string = '';
  title: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private siteService: SiteService) {}

  private FetchTickets(site: Site): Observable<Ticket> {
    console.log('FetchTickets site!');
    if (!site) throw new Error('Site is required');
    return of(new Ticket()).pipe(delay(1000));
  }

  public async getTicketDetails(
    siteKey: string,
    ticketId: string
  ): Promise<Ticket> {
    const ticketSite = this.siteService.getSite(siteKey);
    return await lastValueFrom(this.FetchTickets(ticketSite));
  }
}

@Injectable({ providedIn: 'root' })
export class SiteService {
  public getSite(id: string): Site {
    console.log('getting site!');
    return new Site();
  }
}
