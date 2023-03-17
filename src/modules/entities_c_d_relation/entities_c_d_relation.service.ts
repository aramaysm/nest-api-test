import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntitiesCDRelationDto } from './dto/entities_c_d_relation.dto';
import { EntitiesCDRelation } from './entities/entities_c_d_relation.entity';

@Injectable()
export class EntitiesCDRelationService extends TypeOrmCrudService<EntitiesCDRelation> {
  constructor(@InjectRepository(EntitiesCDRelation) repo) {
    super(repo);
  }

}