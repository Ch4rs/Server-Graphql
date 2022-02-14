import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const CubiertaType =  new GraphQLObjectType({
    name:'Cubierta',
    fields:{
        id:{type:GraphQLID},
        cubierta:{type:GraphQLString}
    }
})