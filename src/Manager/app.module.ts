import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './app.controller';
import { TicketEntity } from './ticket.entity';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity]),TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2598',
      database: 'ticket',
      entities: [TicketEntity],
      synchronize: true,
  })],
  controllers: [TicketController],
  providers: [TicketService],
})
export class AppModule {
  constructor(){
  console.log('App Module');
  }
}
