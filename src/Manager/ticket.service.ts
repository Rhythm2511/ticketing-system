<<<<<<< HEAD
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
    

=======
import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class TicketService{
    
    private ticketData = []

    addTicket(ticket){
        this.ticketData.push(ticket);
        return 'Ticket Added';
    }

    updateTicket(){
        
        return 'This will update ticket';
    }

    deleteTicketById(id: number) {
        this.ticketData = this.ticketData.filter((ticketData)=>{
            return ticketData.id != ticketData.id;
        });
        return "Ticket Deleted";
    }

    findTicket(){
        return this.ticketData;
    }

    // findTicketById(id :number){
    //     return this.ticketData.find(ticketData => ticketData.id === id);
    // } 
    

>>>>>>> 44d68b7b986c53e8abf97f5570844de39504b182
}