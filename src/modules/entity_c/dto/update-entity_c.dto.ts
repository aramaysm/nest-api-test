import { IsBoolean,  IsString } from "class-validator";

export class UpdateEntityC_Dto {
       
    @IsString()    
    entityCData1: string;

    @IsString() 
    entityCData2:string;

    @IsString() 
    entityCData3:string;

    @IsBoolean()
    isActived: boolean;
}
