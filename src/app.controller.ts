import { Controller, Delete, Get, Post, Put} from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { TicketService } from "./ticket.service";


@Controller("ticket")
export class TicketController{

    constructor(private ticketService : TicketService){}

    //add ticket
    @Post("/add")
    addTicket() : string{
        return this.ticketService.addTicket();
    }


    //delete ticket
    @Delete("/delete")
    deleteTicket() : string{
        return this.ticketService.deleteTicket();
    }


    //update ticket
    @Put("/update")
    updateTicket() : string{
        return this.ticketService.updateTicket();
    }
    
    
    //find all ticket
    @Get("/findAll")
    findAllTickets() : string{
        return this.ticketService.findTicket();
    }

    // @Get('/findTicketById/:ticketId')
    // findTicketById(@Param() params): string {
    // console.log(params.id);
    // return `This will find a ticket of id #${params.ticketId} `;
}

