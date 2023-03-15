import { IsBoolean,  IsString } from "class-validator";

export class UpdateEntityB_Dto {
       
    @IsString()    
    entityBData1: string;

    @IsString() 
    entityBData2:string;

    @IsString() 
    entityBData3:string;

    @IsBoolean()
    isActived: boolean;
}

