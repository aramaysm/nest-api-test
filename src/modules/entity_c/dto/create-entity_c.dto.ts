import { IsNotEmpty, IsString } from "class-validator";


export class CreateEntityC_Dto {

    @IsNotEmpty()
    @IsString()    
    entityCData1: string;

    @IsNotEmpty()
    @IsString() 
    entityCData2:string;

    @IsNotEmpty()
    @IsString() 
    entityCData3:string;

}
