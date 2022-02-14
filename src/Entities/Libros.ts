import { Entity,BaseEntity, PrimaryGeneratedColumn, Column,OneToOne, JoinColumn,ManyToOne, CreateDateColumn} from "typeorm";
import { Autores } from "./Autores";
import { Cubiertas } from "./Cubiertas";
import { Editoriales } from "./Editoriales";
import { Temas } from "./Temas";

@Entity()
export class Libros  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    isbn:string;

    @ManyToOne(type => Autores)
    @JoinColumn()
    autor: Autores;

    @ManyToOne(type => Editoriales)
    @JoinColumn()
    editorial: Editoriales;

    @CreateDateColumn()
    fechaedicion : Date

    @ManyToOne(type => Temas)
    @JoinColumn()
    tema: Temas;

    @Column()
    edicion : number

    @ManyToOne(type => Cubiertas)
    @JoinColumn()
    cubierta: Cubiertas;

    /*@ManyToOne(type => Author, author => author.photos)
    author: Author; */

    @Column()
    paginas : number

    @Column()
    ejemplares : number

    @Column()
    estanteria : number
}