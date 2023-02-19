import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class TicketService{
    addTicket() : string {
        return 'This will add ticket';
    }

    updateTicket() :string {
        return 'This will update ticket';
    }

    deleteTicket() : string {
        return 'This will delete ticket';
    }

    findTicket() : string {
        return 'This will find all tickets';
    }

}