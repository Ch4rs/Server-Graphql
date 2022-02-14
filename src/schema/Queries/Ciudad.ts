import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Ciudades } from "../../Entities/Ciudades";
import { CiudadType } from "../TypeDefs/Ciudad";
export const GET_ALL_CIUDADES = {
    type: new GraphQLList(CiudadType),
    resolve() {
      return Ciudades.find();
    },
  };
  
  export const GET_CIUDADES = {
    type: CiudadType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Ciudades.findOne(args.id);
      return result;
    },
  };