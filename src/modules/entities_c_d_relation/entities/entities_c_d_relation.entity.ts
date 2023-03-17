import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { EntityC } from '../../../modules/entity_c/entities/entity_c.entity';
import { EntityD } from '../../../modules/entity_d/entities/entity_d.entity';


/*
Entity para la relacion de mucho a mucho entre las entidades c y d, 
con el objetivo de facilitar el acceso directo a los servicios de esta relacion.
*/


@Entity('entity_c_d_relation')
export class EntitiesCDRelation extends BaseEntity {


  @PrimaryGeneratedColumn('increment')
  public id: number;

  @ManyToOne(() => EntityC, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn()
  entityC: EntityC;

  @ManyToOne(() => EntityD, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn()
  entityD: EntityD;
}
