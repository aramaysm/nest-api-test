import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityDService } from './entity_d.service';
import { CreateEntityD_Dto,UpdateEntityD_Dto } from './dto/';
import { Crud, CrudController } from '@nestjsx/crud';
import { EntityD } from './entities/entity_d.entity';


@Crud({
  model: {
    type: EntityD,
  },
  dto: {
    create: CreateEntityD_Dto,
    update: UpdateEntityD_Dto,    
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


@Controller('entity-d')
export class EntityDController implements CrudController<EntityD>  {
  constructor(public service: EntityDService) {



  }
}
