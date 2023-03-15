import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntityA_Dto {

    @IsNotEmpty()
    @IsString()    
    entityAData1: string;

    @IsNotEmpty()
    @IsString() 
    entityAData2:string;

    @IsNotEmpty()
    @IsString() 
    entityAData3:string;
}
