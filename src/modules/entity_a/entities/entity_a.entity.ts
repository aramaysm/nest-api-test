import { EntityB } from 'src/modules/entity_b/entities/entity_b.entity';
import {
  BaseEntity,
  Column,
  Entity,  
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrudValidationGroups } from "@nestjsx/crud";
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;


/* Entity A: 
    -Id: Identificador y llave primaria de la tabla en la BD.
    -EntityAField1, 2 y 3: Campos de texto requeridos en los requisitos del test.
    -CreatedAt: Fecha y hora de la creacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -UpdatedAt: Fecha y hora de la actualizacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -IsActive: Campo booleano que indica si el elemento está activo o no(borrado logico).
    -ListEntityB: Relación uno a muchos con la entidad B.

*/


@Entity('entity_a')
export class EntityA extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_a_field1" })
  entityAField1: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_a_field2" })
  entityAField2: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name:"entity_a_field3" })
  entityAField3: string;

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

  @OneToMany(() => EntityB, (entity_b) => entity_b.id)
  listEntityB: EntityB[];
}
