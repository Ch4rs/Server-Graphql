import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { MessageType } from "../TypeDefs/Message";
import { CubiertaType } from "../TypeDefs/Cubierta";
import { Cubiertas } from "../../Entities/Cubiertas";

export const CREATE_CUBIERTA = {
    type: CubiertaType,
    args: {
      cubierta:{type:GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { cubierta } = args;
    
        const result = await Cubiertas.insert({
          cubierta
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_CUBIERTA = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Cubiertas.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Cubierta",
          };
        return {
            success: true,
            message: "Delete Cubierta successfully",
          };
    },
};
export const UPDATE_CUBIERTA= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "CubiertaInput",
          fields: () => ({
            cubierta:{type:GraphQLString},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Cubiertas.update(
        { id },
        {   cubierta: input.cubierta,
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Cubierta successfully",
      };
    },
  };