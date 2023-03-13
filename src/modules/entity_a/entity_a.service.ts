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

  create(createEntityADto: CreateEntityA_Dto) {
    return 'This action adds a new entityA';
  }

  findAll() {
    return `This action returns all entityA`;
  }
/*
  findOne(id: number) {
    return `This action returns a #${id} entityA`;
  }
  */

  update(id: number, updateEntityADto: UpdateEntityA_Dto) {
    return `This action updates a #${id} entityA`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityA`;
  }
}
