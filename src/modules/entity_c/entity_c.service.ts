import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEntityC_Dto, UpdateEntityC_Dto } from './dto/';
import { EntityC } from './entities/entity_c.entity';


@Injectable()
export class EntityCService extends TypeOrmCrudService<EntityC> {
  constructor(@InjectRepository(EntityC) repo) {
    super(repo);
  }

  
  async getOneOverCamps(body:any) {
    const textToSearch = body.search;
    let findDataC_and_D = await this.repo.findOne({
      relations: ['list_d'],
    });
  }

}