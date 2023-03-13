
import { EntityC } from "src/modules/entity_c/entities/entity_c.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('entity_d')
export class EntityD extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityDField1: string;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityDField2: string;

    @Column({ type: 'varchar', length: 65, nullable: false})
    entityDField3: string;      
   
    @Column({ type : 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'bool', default: true})
     isActive:boolean;

     @ManyToMany(() => EntityC, (entity_c) => entity_c.listEntityD)
     listEntityC: EntityC[]

}
