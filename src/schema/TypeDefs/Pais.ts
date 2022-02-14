import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const PaisType =  new GraphQLObjectType({
    name:'Pais',
    fields:{
        id:{type:GraphQLID},
        pais:{type:GraphQLString}
    }
})