import { Entity,BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn} from "typeorm";
import { Ciudades } from "./Ciudades";
import { Paises } from "./Paises";

@Entity()
export class Autores  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    /*
    @ManyToOne(type => Cubiertas,cubierta =>Cubiertas.findOne(cubierta))
    @JoinColumn()
    cubierta: Cubiertas;
    */
    @ManyToOne(type => Ciudades)
    @JoinColumn()
    ciudad: Ciudades;

    @ManyToOne(type => Paises)
    @JoinColumn()
    pais: Paises;

    @CreateDateColumn()
    fechanacimiento : Date
}