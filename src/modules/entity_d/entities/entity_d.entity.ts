
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { EntitiesCDRelation } from '../../../modules/entities_c_d_relation/entities/entities_c_d_relation.entity';

const { CREATE, UPDATE } = CrudValidationGroups;


/* Entity D: 
    -Id: Identificador y llave primaria de la tabla en la BD.
    -EntityDField1, 2 y 3: Campos de texto requeridos en los requisitos del test.
    -CreatedAt: Fecha y hora de la creacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -UpdatedAt: Fecha y hora de la actualizacion del elemento (que se llena automáticamente con la fecha y hora actual).
    -IsActive: Campo booleano que indica si el elemento está activo o no(borrado logico).
    -ListEntityD: Relación muchos a muchos con la entidad D.
*/


@Entity('entity_d')
export class EntityD extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name: 'entity_d_field1' })
  entityDField1: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name: 'entity_d_field2' })
  entityDField2: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false, name: 'entity_d_field3' })
  entityDField3: string;

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

  @OneToMany(() => EntitiesCDRelation, (entity_cd) => entity_cd.id,
  {onUpdate:"RESTRICT",onDelete:"CASCADE"})
  entitiesCD: EntitiesCDRelation[];
  
}
