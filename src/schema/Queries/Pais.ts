import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Paises } from "../../Entities/Paises";
import { CiudadType } from "../TypeDefs/Ciudad";
export const GET_ALL_PAISES = {
    type: new GraphQLList(CiudadType),
    resolve() {
      return Paises.find();
    },
  };
  
  export const GET_PAISES = {
    type: CiudadType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Paises.findOne(args.id);
      return result;
    },
  };