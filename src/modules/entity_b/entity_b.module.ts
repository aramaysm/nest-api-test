import { Module } from '@nestjs/common';
import { EntityBService } from './entity_b.service';
import { EntityBController } from './entity_b.controller';

@Module({
  controllers: [EntityBController],
  providers: [EntityBService]
})
export class EntityBModule {}
