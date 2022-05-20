import { Maravillas } from "./maravillas";

export class MaravillasDetail extends Maravillas {

    constructor(  id: number, name: string,country: string,description: string,image: string) 
    {
        super(id, name,country,description,image)
    }

}

