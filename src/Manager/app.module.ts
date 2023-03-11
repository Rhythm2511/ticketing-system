import { Module } from '@nestjs/common';
import { TicketController } from './app.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [TicketService],
})
export class AppModule {
  constructor(){
  console.log('App Module');
  }
}
