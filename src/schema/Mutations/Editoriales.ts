import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { MessageType } from "../TypeDefs/Message";
import { EditorialType } from "../TypeDefs/Editorial";
import { Editoriales } from "../../Entities/Editoriales";

export const CREATE_EDITORIAL = {
    type: EditorialType,
    args: {
      nombre:{type:GraphQLString},
      direccion:{type:GraphQLString},
      telefono:{type:GraphQLString},
      ciudad:{type:GraphQLID},
      pais:{type:GraphQLID}
    },
    async resolve(parent: any, args: any) {
        const { nombre,direccion,telefono,ciudad,pais } = args;
    
        const result = await Editoriales.insert({
            nombre,
            direccion,
            telefono,
            pais,
            ciudad
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_EDITORIAL = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Editoriales.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Editorial",
          };
        return {
            success: true,
            message: "Deleter Editorial successfully",
          };
    },
};
export const UPDATE_EDITORIAL= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "EditorialInput",
          fields: () => ({
            nombre:{type:GraphQLString},
            direccion:{type:GraphQLString},
            telefono:{type:GraphQLString},
            ciudad:{type:GraphQLID},
            pais:{type:GraphQLID}
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Editoriales.update(
        { id },
        {   nombre: input.nombre,
            direccion:input.direccion,
            telefono: input.telefono, 
            ciudad: input.ciudad,
            pais: input.pais
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Editorial successfully",
      };
    },
  };