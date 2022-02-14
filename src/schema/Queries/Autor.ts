import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Autores } from "../../Entities/Autores";
import { AutorType } from "../TypeDefs/Autor";
export const GET_ALL_AUTOR = {
    type: new GraphQLList(AutorType),
    resolve() {
      return Autores.find();
    },
  };
  
  export const GET_AUTOR = {
    type: AutorType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Autores.findOne(args.id);
      return result;
    },
  };

  