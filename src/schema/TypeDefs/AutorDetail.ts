import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { CiudadType } from "./Ciudad";
import { PaisType } from "./Pais";
export const AutorType =  new GraphQLObjectType({
    name:'Autor',
    fields:{
        id:{type:GraphQLID},
        nombre:{type:GraphQLString},
        apellido:{type:GraphQLString},
        ciudad:{type:GraphQLID},
        pais:{type:GraphQLID},
        year:{type:GraphQLInt}
    }
})

export const AutorDetailType =  new GraphQLObjectType({
    name:'AutorDetail',
    fields:{
        id:{type:GraphQLID},
        nombre:{type:GraphQLString},
        apellido:{type:GraphQLString},
        ciudad:{type:CiudadType},
        pais:{type:PaisType},
        year:{type:GraphQLInt}
    }
})
