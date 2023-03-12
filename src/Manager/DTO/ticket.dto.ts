<<<<<<< HEAD
import { IsNotEmpty } from "class-validator";

export class ticketDTO{
    id: number;

    @IsNotEmpty({message: 'The name cannot be empty'})
    name: string;

    @IsNotEmpty()
    title: string;
    time: string;
}
=======
import { IsNotEmpty } from "class-validator";

export class ticketDTO{
    id: number;

    @IsNotEmpty({message: 'The name cannot be empty'})
    name: string;

    @IsNotEmpty()
    title: string;
    time: string;
}
>>>>>>> 44d68b7b986c53e8abf97f5570844de39504b182
