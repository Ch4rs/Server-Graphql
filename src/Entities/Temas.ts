import { Entity,BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Temas  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tema:string;
}