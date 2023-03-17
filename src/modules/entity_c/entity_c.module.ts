import { Module } from '@nestjs/common';
import { EntityCService } from './entity_c.service';
import { EntityCController } from './entity_c.controller';
import { EntityC } from './entities/entity_c.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntityC])],
  controllers: [EntityCController],
  exports: [EntityCService],
  providers: [EntityCService]
})
export class EntityCModule {}
