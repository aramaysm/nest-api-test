import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityCService } from './entity_c.service';
import { CreateEntityC_Dto,UpdateEntityC_Dto } from './dto/';


@Controller('entity-c')
export class EntityCController {
  constructor(private readonly entityCService: EntityCService) {}

  @Post()
  create(@Body() createEntityCDto: CreateEntityC_Dto) {
    return this.entityCService.create(createEntityCDto);
  }

  @Get()
  findAll() {
    return this.entityCService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityCService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityCDto: UpdateEntityC_Dto) {
    return this.entityCService.update(+id, updateEntityCDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityCService.remove(+id);
  }
}
