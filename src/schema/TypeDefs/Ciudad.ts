import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const CiudadType =  new GraphQLObjectType({
    name:'Ciudad',
    fields:{
        id:{type:GraphQLID},
        ciudad:{type:GraphQLString}
    }
})