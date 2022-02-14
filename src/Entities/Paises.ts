import { Entity,BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Paises  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    pais:string;
}