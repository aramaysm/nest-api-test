import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEntityD_Dto, UpdateEntityD_Dto } from './dto/';
import { EntityD } from './entities/entity_d.entity';

@Injectable()
export class EntityDService extends TypeOrmCrudService<EntityD> {
  constructor(@InjectRepository(EntityD) repo) {
    super(repo);
  }
 
}
