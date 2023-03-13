import { Module } from '@nestjs/common';
import { EntityDService } from './entity_d.service';
import { EntityDController } from './entity_d.controller';

@Module({
  controllers: [EntityDController],
  providers: [EntityDService]
})
export class EntityDModule {}
