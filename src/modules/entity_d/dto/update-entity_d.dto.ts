import { IsBoolean, IsString } from 'class-validator';

export class UpdateEntityD_Dto {
  @IsString()
  entityDData1: string;

  @IsString()
  entityDData2: string;

  @IsString()
  entityDData3: string;

  @IsBoolean()
  isActived: boolean;
}
