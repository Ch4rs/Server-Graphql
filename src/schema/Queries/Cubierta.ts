import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Cubiertas } from "../../Entities/Cubiertas";
import { CubiertaType } from "../TypeDefs/Cubierta";
export const GET_ALL_CUBIERTAS = {
    type: new GraphQLList(CubiertaType),
    resolve() {
      return Cubiertas.find();
    },
  };
  
  export const GET_CUBIERTAS = {
    type: CubiertaType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Cubiertas.findOne(args.id);
      return result;
    },
  };