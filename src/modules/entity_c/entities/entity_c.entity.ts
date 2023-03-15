import { EntityD } from 'src/modules/entity_d/entities/entity_d.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;


/* Entity C: 
    -Id: Identificador y llave primaria de la tabla en la BD.
    -EntityCField1, 2 y 3: Campos de texto requeridos en los requisitos del test.
    -CreatedAt: Fecha y hora de la creacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -UpdatedAt: Fecha y hora de la actualizacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -IsActive: Campo booleano que indica si el elemento está activo o no(borrado logico).
    -ListEntityD: Relación muchos a muchos con la entidad D.
*/

@Entity('entity_c')
export class EntityC extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({
    type: 'varchar',
    length: 65,
    nullable: false,
    name: 'entity_c_field1',
  })
  entityCField1: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({
    type: 'varchar',
    length: 65,
    nullable: false,
    name: 'entity_c_field2',
  })
  entityCField2: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({
    type: 'varchar',
    length: 65,
    nullable: false,
    name: 'entity_c_field3',
  })
  entityCField3: string;

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

  @ManyToMany(() => EntityD, (entity_d) => entity_d.list_c)
  @JoinTable()
  list_d: EntityD[];
}
