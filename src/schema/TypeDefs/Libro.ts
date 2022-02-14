import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { AutorType } from "./Autor";
import { CubiertaType } from "./Cubierta";
import { EditorialType } from "./Editorial";
import { TemaType } from "./Tema";
export const LibroType =  new GraphQLObjectType({
    name:'Libro',
    fields:{
        id:{type:GraphQLID},
        titulo:{type:GraphQLString},
        isbn:{type:GraphQLString},
        autor:{type:AutorType!},
        editorial:{type:EditorialType!},
        tema:{type:TemaType},
        edicion:{type:GraphQLInt},
        cubierta:{type:CubiertaType!},
        paginas:{type:GraphQLInt!},
        ejemplares:{type:GraphQLInt},
        estanteria:{type:GraphQLInt}
    }
})
