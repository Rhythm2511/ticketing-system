import { IsNotEmpty } from "class-validator";

export class ticketDTO{
    id: number;

    @IsNotEmpty({message: 'The name cannot be empty'})
    name: string;

    @IsNotEmpty()
    title: string;
    
    time: string;
}
