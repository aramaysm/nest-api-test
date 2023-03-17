import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityCService } from './entity_c.service';
import { CreateEntityC_Dto,UpdateEntityC_Dto } from './dto/';
import { Crud, CrudController } from "@nestjsx/crud";
import { EntityC } from './entities/entity_c.entity';

@Crud({
  model: {
    type: EntityC,
  },
  dto: {
    create: CreateEntityC_Dto,
    update: UpdateEntityC_Dto,    
  },
  query:{
    sort: [
      {
        field: "id",
        order: "DESC",
      },
    ],
    persist: ["createdAt","updatedAt"],
    filter:{      
      isActive: {
        $ne: false
      }
    }
  }
})


@Controller('entity-c')
export class EntityCController implements CrudController<EntityC>  {
  constructor(public service: EntityCService) {



  }
}