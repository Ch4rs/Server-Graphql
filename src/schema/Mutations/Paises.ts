import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { Paises } from "../../Entities/Paises";
import { MessageType } from "../TypeDefs/Message";
import { PaisType } from "../TypeDefs/Pais";

export const CREATE_PAIS = {
    type: PaisType,
    args: {
      pais:{type:GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { pais } = args;
    
        const result = await Paises.insert({
          pais
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_PAIS = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Paises.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Pais",
          };
        return {
            success: true,
            message: "Delete Pais successfully",
          };
    },
};
export const UPDATE_PAIS= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "PaisInput",
          fields: () => ({
            pais:{type:GraphQLString},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Paises.update(
        { id },
        {   pais: input.pais,
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Pais successfully",
      };
    },
  };