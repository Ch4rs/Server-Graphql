import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const TemaType =  new GraphQLObjectType({
    name:'Tema',
    fields:{
        id:{type:GraphQLID},
        tema:{type:GraphQLString}
    }
})