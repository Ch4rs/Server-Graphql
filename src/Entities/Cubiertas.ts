import { Entity,BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cubiertas  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    cubierta:string;
}