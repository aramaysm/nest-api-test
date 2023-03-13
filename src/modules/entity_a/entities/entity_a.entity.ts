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


@Entity('entity_a')
export class EntityA extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false })
  entityAField1: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false })
  entityAField2: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', length: 65, nullable: false })
  entityAField3: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  public createdAt: Date;

  @Column({ type: 'bool', default: true })
  isActive: boolean;

  @OneToMany(() => EntityB, (entity_b) => entity_b.id)
  listEntityB: EntityB[];
}
