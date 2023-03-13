
import { EntityD } from "src/modules/entity_d/entities/entity_d.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('entity_c')
export class EntityC extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityCField1: string;

    @Column({type: 'varchar', length: 65, nullable: false})
    entityCField2: string;

    @Column({ type: 'varchar', length: 65, nullable: false})
    entityCField3: string;      
   
    @Column({ type : 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    public createdAt: Date;

    @Column({ type: 'bool', default: true})
     isActive:boolean;

     @ManyToMany(() => EntityD, (entity_d) => entity_d.listEntityC)
    @JoinTable()
    listEntityD: EntityD[]

}
