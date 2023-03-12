import { Injectable, Param } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TicketEntity } from "./ticket.entity";


@Injectable()
export class TicketService{
    
    constructor(
        @InjectRepository(TicketEntity)
        private ticketRepo: Repository<TicketEntity>,
      ) {}

    private ticketData = []

    addTicket(ticket){
        this.ticketRepo.save(ticket);
        return 'Ticket Added';
    }

    updateTicket(){
        
        return 'This will update ticket';
    }

    deleteTicketById(id):any {
    
        return this.ticketRepo.delete(id);
    }

    

    findTicket(){
        return this.ticketData;
    }

    findTicketById(@Param('id') id :number){
        return this.ticketData.find(ticketData => +ticketData.id == +id);
    } 
    

}