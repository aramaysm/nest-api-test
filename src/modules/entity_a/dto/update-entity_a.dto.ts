import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateEntityA_Dto {

    
    @IsString()    
    entityAData1: string;

    @IsString() 
    entityAData2:string;

    @IsString() 
    entityAData3:string;

    @IsBoolean()
    isActived: boolean;
}
