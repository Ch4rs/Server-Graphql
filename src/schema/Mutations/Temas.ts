import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { Temas } from "../../Entities/Temas";
import { MessageType } from "../TypeDefs/Message";
import { TemaType } from "../TypeDefs/Tema";

export const CREATE_TEMA = {
    type: TemaType,
    args: {
      pais:{type:GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { tema } = args;
    
        const result = await Temas.insert({
          tema
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_TEMA = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Temas.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Temas",
          };
        return {
            success: true,
            message: "Delete Temas successfully",
          };
    },
};
export const UPDATE_TEMA= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "TemaInput",
          fields: () => ({
            tema:{type:GraphQLString},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Temas.update(
        { id },
        {   tema: input.tema,
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Temas successfully",
      };
    },
  };