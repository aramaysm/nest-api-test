import { Injectable } from '@nestjs/common';
import { CreateEntityD_Dto, UpdateEntityD_Dto } from './dto/';

@Injectable()
export class EntityDService {
  create(createEntityDDto: CreateEntityD_Dto) {
    return 'This action adds a new entityD';
  }

  findAll() {
    return `This action returns all entityD`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityD`;
  }

  update(id: number, updateEntityDDto: UpdateEntityD_Dto) {
    return `This action updates a #${id} entityD`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityD`;
  }
}
