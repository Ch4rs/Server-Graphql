import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Libros } from "../../Entities/Libros";
import { LibroType } from "../TypeDefs/Libro";
export const GET_ALL_LIBRO = {
    type: new GraphQLList(LibroType),
    resolve() {
      return Libros.find();
    },
  };
  
  export const GET_LIBRO = {
    type: LibroType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Libros.findOne(args.id);
      return result;
    },
  };

  