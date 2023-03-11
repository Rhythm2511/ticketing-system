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
    

}