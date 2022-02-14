import { Entity,BaseEntity, PrimaryGeneratedColumn, Column,OneToOne, JoinColumn,ManyToOne} from "typeorm";
import { Ciudades } from "./Ciudades";
import { Paises } from "./Paises";

@Entity()
export class Editoriales  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    direccion:string;

    @Column()
    Telefono: string;

    @ManyToOne(type => Ciudades)
    @JoinColumn()
    ciudad: Ciudades;

    @ManyToOne(type => Paises)
    @JoinColumn()
    pais : Paises

}