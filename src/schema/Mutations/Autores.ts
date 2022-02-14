import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { Autores } from "../../Entities/Autores";
import { MessageType } from "../TypeDefs/Message";
import { AutorType } from "../TypeDefs/Autor";

export const CREATE_AUTOR = {
    type: AutorType,
    args: {
      nombre:{type:GraphQLString},
      apellido:{type:GraphQLString},
      ciudad:{type:GraphQLID},
      pais:{type:GraphQLID},
      fechanacimiento:{type:GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const { nombre,ciudad,pais,fechanacimiento,apellido } = args;
    
        const result = await Autores.insert({
            nombre,
            ciudad,
            pais,
            fechanacimiento,
            apellido
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_AUTOR = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Autores.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Autor",
          };
        return {
            success: true,
            message: "Deleter Autor successfully",
          };
    },
};
export const UPDATE_AUTOR= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "AutorInput",
          fields: () => ({
            nombre:{type:GraphQLString},
            apellido:{type:GraphQLString},
            ciudad:{type:GraphQLID},
            pais:{type:GraphQLID},
            fechanacimiento:{type:GraphQLString}
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Autores.update(
        { id },
        {   nombre: input.nombre,
            apellido:input.apellido,
            ciudad: input.ciudad, 
            pais: input.pais,
            fechanacimiento: input.fechanacimiento
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Autor successfully",
      };
    },
  };