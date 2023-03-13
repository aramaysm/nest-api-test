import { Module } from '@nestjs/common';
import { EntityCService } from './entity_c.service';
import { EntityCController } from './entity_c.controller';

@Module({
  controllers: [EntityCController],
  providers: [EntityCService]
})
export class EntityCModule {}
