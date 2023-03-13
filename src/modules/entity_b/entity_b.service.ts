import { Injectable } from '@nestjs/common';
import { CreateEntityB_Dto,UpdateEntityB_Dto } from './dto/';


@Injectable()
export class EntityBService {
  create(createEntityBDto: CreateEntityB_Dto) {
    return 'This action adds a new entityB';
  }

  findAll() {
    return `This action returns all entityB`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityB`;
  }

  update(id: number, updateEntityBDto: UpdateEntityB_Dto) {
    return `This action updates a #${id} entityB`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityB`;
  }
}
