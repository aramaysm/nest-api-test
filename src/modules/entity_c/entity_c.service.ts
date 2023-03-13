import { Injectable } from '@nestjs/common';
import { CreateEntityC_Dto, UpdateEntityC_Dto } from './dto/';


@Injectable()
export class EntityCService {
  create(createEntityCDto: CreateEntityC_Dto) {
    return 'This action adds a new entityC';
  }

  findAll() {
    return `This action returns all entityC`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityC`;
  }

  update(id: number, updateEntityCDto: UpdateEntityC_Dto) {
    return `This action updates a #${id} entityC`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityC`;
  }
}
