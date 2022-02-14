import { createConnection } from "typeorm";
import { Autores } from "./Entities/Autores";
import { Ciudades } from "./Entities/Ciudades";
import { Cubiertas } from "./Entities/Cubiertas";
import { Editoriales } from "./Entities/Editoriales";
import { Paises } from "./Entities/Paises";
import { Temas } from "./Entities/Temas";
import { Users } from "./Entities/Users";
import { Libros } from "./Entities/Libros";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";


export const connectDB= async() =>{
await createConnection({
type:'mysql',
username:DB_USERNAME,
password:DB_PASSWORD,
port:Number(DB_PORT),
host:DB_HOST,
database:DB_NAME,
entities:[Users,Autores,Ciudades,Cubiertas,Editoriales,Paises,Temas,Libros],
//true si existen los modelos.
synchronize:true,
//si tenemos https debe ir true
ssl:false
})
}