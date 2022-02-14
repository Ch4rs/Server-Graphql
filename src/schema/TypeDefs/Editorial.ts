import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { CiudadType } from "./Ciudad";
import { PaisType } from "./Pais";
export const EditorialType =  new GraphQLObjectType({
    name:'Editorial',
    fields:{
        id:{type:GraphQLID},
        nombre:{type:GraphQLString},
        direccion:{type:GraphQLString},
        telefono:{type:CiudadType!},
        ciudad:{type:CiudadType!},
        pais:{type:PaisType}
    }
})
