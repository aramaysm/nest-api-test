import { EntityA } from '../../entity_a/entities/entity_a.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;


/* Entity B: 
    -Id: Identificador y llave primaria de la tabla en la BD.
    -EntityBField1, 2 y 3: Campos de texto requeridos en los requisitos del test.
    -CreatedAt: Fecha y hora de la creacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -UpdatedAt: Fecha y hora de la actualizacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -IsActive: Campo booleano que indica si el elemento está activo o no(borrado logico).
    -EntityA: Relación muchos a uno con la entidad A.

*/

@Entity('entity_b')
export class EntityB extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_b_field1" })
  entityBField1: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_b_field2" })
  entityBField2: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_b_field3" })
  entityBField3: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  public createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  public updatedAt: Date;


  @Column({ type: 'bool', default: true })
  isActive: boolean;

  @ManyToOne(() => EntityA, (entity_a) => entity_a.listEntityB)
  entity_a: EntityA;
}
