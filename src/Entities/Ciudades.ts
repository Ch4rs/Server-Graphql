import { Entity,BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Ciudades  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ciudad:string;
}