import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityDService } from './entity_d.service';
import { CreateEntityD_Dto,UpdateEntityD_Dto } from './dto/';


@Controller('entity-d')
export class EntityDController {
  constructor(private readonly entityDService: EntityDService) {}

  @Post()
  create(@Body() createEntityDDto: CreateEntityD_Dto) {
    return this.entityDService.create(createEntityDDto);
  }

  @Get()
  findAll() {
    return this.entityDService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityDService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityDDto: UpdateEntityD_Dto) {
    return this.entityDService.update(+id, updateEntityDDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityDService.remove(+id);
  }
}
