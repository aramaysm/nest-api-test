import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEntityB_Dto,UpdateEntityB_Dto } from './dto/';
import { EntityB } from './entities/entity_b.entity';


@Injectable()
export class EntityBService extends TypeOrmCrudService<EntityB> {
  constructor(@InjectRepository(EntityB) repo) {
    super(repo);
  }
 
}
