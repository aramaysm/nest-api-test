import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntitiesCDRelationService } from './entities_c_d_relation.service';
import { EntitiesCDRelationDto } from './dto/entities_c_d_relation.dto';
import { EntitiesCDRelation } from './entities/entities_c_d_relation.entity';
import { Crud, CrudController } from '@nestjsx/crud';



@Crud({
  model: {
    type: EntitiesCDRelation,
  },
  dto: {
    create: EntitiesCDRelationDto,
  },
  
  query:{
    sort: [
      {
        field: "id",
        order: "ASC",
      },
    ],
    
    join:{

      entityC:{
        allow:['entityCField1','entityCField2'],  //Se escogio al azar permitir solo esos dos fields, solo por demostrar conocimiento
        eager: true,
        required: true
      },
      entityD:{
        allow:['entityDField2','entityDField3'],  //Se escogio al azar permitir solo esos dos fields, solo por demostrar conocimiento
        eager: true,
        required: true
      }
    },
    
  }
})


@Controller('entities-c-d-relation')
export class EntitiesCDRelationController implements CrudController<EntitiesCDRelation>  {
  constructor(public service: EntitiesCDRelationService) {}
}

