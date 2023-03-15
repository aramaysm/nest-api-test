import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityAService } from './entity_a.service';
import { CreateEntityA_Dto, UpdateEntityA_Dto } from './dto/';
import { Crud, CrudController } from "@nestjsx/crud";
import { EntityA } from './entities/entity_a.entity';


@Crud({
  model: {
    type: EntityA,
  },
  dto: {
    create: CreateEntityA_Dto,
    update: UpdateEntityA_Dto,    
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

@Controller('entity-a')
export class EntityAController implements CrudController<EntityA> {
  constructor(public service: EntityAService) {}
}
