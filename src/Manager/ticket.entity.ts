import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tickets')
export class TicketEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @Column({
        type: 'varchar',
    })
    title: string;
    
    @Column({
        type: 'varchar',
    })
    time: string;

    @Column({
        type: 'boolean',
        default: 1,
    })
    
    isActive: boolean;

}