import { CreateEntityA_Dto,UpdateEntityA_Dto } from './dto/';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { EntityA } from './entities/entity_a.entity';

@Injectable()
export class EntityAService extends TypeOrmCrudService<EntityA> {
  constructor(@InjectRepository(EntityA) repo) {
    super(repo);
  }


}
