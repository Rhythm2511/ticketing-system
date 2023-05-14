import { Controller, Delete, Get, ParseIntPipe, Post, Put, ValidationPipe} from "@nestjs/common";
import { Body, Param, UsePipes } from "@nestjs/common/decorators";
import { ticketDTO } from "./DTO/ticket.dto";
import { TicketService } from "./ticket.service";


@Controller("ticket")
export class TicketController{

    constructor(private ticketService : TicketService){}

    //add ticket
    @Post("/add")
    @UsePipes(ValidationPipe)
    addTicket(@Body() newTicket:ticketDTO){
        return this.ticketService.addTicket(newTicket);
    }


    //delete ticket
    // @Delete("/delete/:id")
    // deleteTicketById(@Param("id") id:number){
    //     return this.ticketService.deleteTicketById(id);
    // }

    @Delete("/deleteTicket/:id")
    deleteTicketById(@Param("id", ParseIntPipe) id:number): any {
        return this.ticketService.deleteTicketById(id);
    }


    //update ticket
    @Put("/update")
    updateTicket() : string{
        return this.ticketService.updateTicket();
    }
    
    
    //find all ticket
    @Get("/findAll")
    findAllTickets(){
        return this.ticketService.findTicket();
    }

    @Get('/find/:id')
    findTicketById(@Param('id') id: number){
        return this.ticketService.findTicketById(id);
     }
}




