import { Module } from '@nestjs/common';
import { EntityBService } from './entity_b.service';
import { EntityBController } from './entity_b.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityB } from './entities/entity_b.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntityB])],
  controllers: [EntityBController],
  exports: [EntityBService],
  providers: [EntityBService]
})
export class EntityBModule {}
