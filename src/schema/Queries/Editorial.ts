import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
import { Editoriales } from "../../Entities/Editoriales";
import { EditorialType } from "../TypeDefs/Editorial";
export const GET_ALL_EDITORIALES = {
    type: new GraphQLList(EditorialType),
    resolve() {
      return Editoriales.find();
    },
  };
  
  export const GET_EDITORIALES = {
    type: EditorialType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
      const result = await Editoriales.findOne(args.id);
      return result;
    },
  };

  