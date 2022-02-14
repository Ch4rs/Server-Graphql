import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { Ciudades } from "../../Entities/Ciudades";
import { MessageType } from "../TypeDefs/Message";
import { CiudadType } from "../TypeDefs/Ciudad";

export const CREATE_CIUDAD = {
    type: CiudadType,
    args: {
      ciudad:{type:GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { ciudad } = args;
    
        const result = await Ciudades.insert({
            ciudad
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_CIUDAD = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Ciudades.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Ciudad",
          };
        return {
            success: true,
            message: "Delete Ciudad successfully",
          };
    },
};
export const UPDATE_CIUDAD= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "CiudadInput",
          fields: () => ({
            ciudad:{type:GraphQLString},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Ciudades.update(
        { id },
        {   ciudad: input.ciudad,
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Ciudad successfully",
      };
    },
  };