import { Module } from '@nestjs/common';
import { EntityAService } from './entity_a.service';
import { EntityAController } from './entity_a.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityA } from './entities/entity_a.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntityA])],
  controllers: [EntityAController],
  exports: [EntityAService],
  providers: [EntityAService]
})
export class EntityAModule {}
