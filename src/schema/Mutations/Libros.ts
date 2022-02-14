import { GraphQLInt, GraphQLID, GraphQLString,GraphQLInputObjectType } from "graphql";
import { Autores } from "../../Entities/Autores";
import { MessageType } from "../TypeDefs/Message";
import { AutorType } from "../TypeDefs/Autor";
import { Libros } from "../../Entities/Libros";

export const CREATE_LIBRO = {
    type: AutorType,
    args: {
      titulo:{type:GraphQLString},
      isbn:{type:GraphQLString},
      autor:{type:GraphQLID!},
      editorial:{type:GraphQLID!},
      tema:{type:GraphQLID},
      edicion:{type:GraphQLInt},
      cubierta:{type:GraphQLID!},
      paginas:{type:GraphQLInt!},
      ejemplares:{type:GraphQLInt},
      estanteria:{type:GraphQLInt}
    },
    async resolve(parent: any, args: any) {
        const { titulo,isbn,autor,editorial,tema,edicion,cubierta,paginas,ejemplares,estanteria } = args;
    
        const result = await Libros.insert({
          titulo,isbn,autor,editorial,tema,edicion,cubierta,paginas,ejemplares,estanteria
        });
        
        return {...args,id:result.identifiers[0].id}
    },
};
export const DELETE_LIBRO = {
    type:MessageType,
    args:{
        id:{type: GraphQLID}
    },
    async resolve(_:any,{id}:any){
        const result = await Libros.delete(id);
        if (result.affected ===0)return {
            success: false,
            message: "Error in Delete Libros",
          };
        return {
            success: true,
            message: "Deleter Libros successfully",
          };
    },
};
export const UPDATE_LIBRO= {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "LibroInput",
          fields: () => ({
            titulo:{type:GraphQLString},
            isbn:{type:GraphQLString},
            autor:{type:GraphQLID},
            editorial:{type:GraphQLID!},
            tema:{type:GraphQLID},
            edicion:{type:GraphQLInt},
            cubierta:{type:GraphQLID},
            paginas:{type:GraphQLInt},
            ejemplares:{type:GraphQLInt},
            estanteria:{type:GraphQLInt},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const response = await Libros.update(
        { id },
        {   titulo: input.titulo,
            isbn:input.isbn,
            autor: input.autor, 
            editorial: input.editorial,
            tema: input.tema, 
            edicion: input.edicion,
            cubierta: input.cubierta, 
            paginas: input.paginas,
            ejemplares: input.ejemplares, 
            estanteria: input.estanteria
        }
      );
  
      if (response.affected === 0) return;
  
      return {
        success: true,
        message: "Update Libros successfully",
      };
    },
  };