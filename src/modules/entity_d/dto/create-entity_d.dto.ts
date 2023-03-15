import { IsNotEmpty, IsString } from "class-validator";


export class CreateEntityD_Dto {
    
    @IsNotEmpty()
    @IsString()    
    entityDData1: string;

    @IsNotEmpty()
    @IsString() 
    entityDData2:string;

    @IsNotEmpty()
    @IsString() 
    entityDData3:string;

}
