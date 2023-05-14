import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './app.controller';
import { TicketEntity } from './ticket.entity';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity]),TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-205.railway.app',
      port: 6710,
      username: 'postgres',
      password: 'arXDorx3aNBF8hpmofCu',
      database: 'railway',
      autoLoadEntities: true,
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
