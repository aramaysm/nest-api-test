import { Module } from '@nestjs/common';
import { EntityDService } from './entity_d.service';
import { EntityDController } from './entity_d.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityD } from './entities/entity_d.entity';

@Module({
  controllers: [EntityDController],
  imports: [TypeOrmModule.forFeature([EntityD])],
  exports: [EntityDService],
  providers: [EntityDService]
})
export class EntityDModule {}
