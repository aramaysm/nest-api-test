import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntityB_Dto {
   
    @IsNotEmpty()
    @IsString()    
    entityBData1: string;

    @IsNotEmpty()
    @IsString() 
    entityBData2:string;

    @IsNotEmpty()
    @IsString() 
    entityBData3:string;
}
