import { Module } from '@nestjs/common';
import { EntitiesCDRelationService } from './entities_c_d_relation.service';
import { EntitiesCDRelationController } from './entities_c_d_relation.controller';
import { EntitiesCDRelation } from './entities/entities_c_d_relation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntitiesCDRelation])],  
  controllers: [EntitiesCDRelationController],
  exports: [EntitiesCDRelationService],
  providers: [EntitiesCDRelationService]
})
export class EntitiesCDRelationModule {}
