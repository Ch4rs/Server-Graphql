import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Temas } from "../../Entities/Temas";
import { TemaType } from "../TypeDefs/Tema";
export const GET_ALL_TEMAS = {
    type: new GraphQLList(TemaType),
    resolve() {
      return Temas.find();
    },
  };
  
  export const GET_TEMAS = {
    type: TemaType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Temas.findOne(args.id);
      return result;
    },
  };