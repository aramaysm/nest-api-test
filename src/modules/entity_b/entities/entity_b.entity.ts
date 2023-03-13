import { EntityA } from "src/modules/entity_a/entities/entity_a.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('entity_b')
export class EntityB extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityBField1: string;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityBField2: string;

    @Column({ type: 'varchar', length: 65, nullable: false})
    entityBField3: string;      
   
    @Column({ type : 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'bool', default: true})
     isActive:boolean;

     @ManyToOne(() => EntityA, (entity_a) => entity_a.listEntityB)
    entityA_Item: EntityA

}
