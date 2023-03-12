import { Module } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { TicketController } from './app.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
>>>>>>> 44d68b7b986c53e8abf97f5570844de39504b182
  controllers: [TicketController],
  providers: [TicketService],
})
export class AppModule {
  constructor(){
  console.log('App Module');
  }
}
