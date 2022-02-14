import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { CiudadType } from "./Ciudad";
import { PaisType } from "./Pais";
export const AutorType =  new GraphQLObjectType({
    name:'Autor',
    fields:{
        id:{type:GraphQLID},
        nombre:{type:GraphQLString},
        apellido:{type:GraphQLString},
        ciudad:{type:CiudadType!},
        pais:{type:PaisType!},
        fechanacimiento:{type:GraphQLString}
    }
})
