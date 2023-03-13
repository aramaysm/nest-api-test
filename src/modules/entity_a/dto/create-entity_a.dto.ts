import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntityA_Dto {

    @IsNotEmpty()
    @IsString()    
    entityAData1: string;

    @IsNotEmpty()
    entityAData2:string;

    @IsNotEmpty()
    entityAData3:string;
}
