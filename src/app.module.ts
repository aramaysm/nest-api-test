import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './database/database.module';
import { EntityAModule } from './modules/entity_a/entity_a.module';
import { EntityBModule } from './modules/entity_b/entity_b.module';
import { EntityCModule } from './modules/entity_c/entity_c.module';
import { EntityDModule } from './modules/entity_d/entity_d.module';

@Module({
  imports: [DatabaseModule,EntityAModule, EntityBModule, EntityCModule, EntityDModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
