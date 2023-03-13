import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityBService } from './entity_b.service';
import { CreateEntityB_Dto,UpdateEntityB_Dto } from './dto/';


@Controller('entity-b')
export class EntityBController {
  constructor(private readonly entityBService: EntityBService) {}

  @Post()
  create(@Body() createEntityBDto: CreateEntityB_Dto) {
    return this.entityBService.create(createEntityBDto);
  }

  @Get()
  findAll() {
    return this.entityBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityBDto: UpdateEntityB_Dto) {
    return this.entityBService.update(+id, updateEntityBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityBService.remove(+id);
  }
}
