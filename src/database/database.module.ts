import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { EntityA } from '../modules/entity_a/entities/entity_a.entity';
import { EntityB } from '../modules/entity_b/entities/entity_b.entity';
import { EntityC } from '../modules/entity_c/entities/entity_c.entity';
import { EntityD } from '../modules/entity_d/entities/entity_d.entity';
import { EntitiesCDRelation } from '../modules/entities_c_d_relation/entities/entities_c_d_relation.entity';


config();
 
@Module({
  imports: [
    
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get("POSTGRES_HOST"),
        port: configService.get<number>("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DB"),
        entities: [EntityA, EntityB, EntityC, EntityD, EntitiesCDRelation],
        synchronize: true,
      }),
    }),
  ],
})
class DatabaseModule {}
 
export default DatabaseModule;