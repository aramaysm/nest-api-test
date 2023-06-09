import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityBService } from './entity_b.service';
import { CreateEntityB_Dto,UpdateEntityB_Dto } from './dto/';
import { Crud, CrudController } from "@nestjsx/crud";
import { EntityB } from './entities/entity_b.entity';


@Crud({
  model: {
    type: EntityB,
  },
  dto: {
    create: CreateEntityB_Dto,
    update: UpdateEntityB_Dto,    
  },
  
  query:{
    sort: [
      {
        field: "id",
        order: "ASC",
      },
    ],
    join:{

      entity_a:{
        allow:['entityAField1','entityAField2'],  //Se escogio al azar permitir solo esos dos fields, solo por demostrar conocimiento
        eager: true,
        required: true
      }
    },
    persist: ["createdAt","updatedAt"],
    filter:{
       isActive: {
        $ne: false
      }
    },

  }
})


@Controller('entity-b')
export class EntityBController implements CrudController<EntityB>  {
  constructor(public service: EntityBService) {}
}
