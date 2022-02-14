import { GraphQLSchema,GraphQLObjectType } from "graphql";
import { GREETING } from './Queries/Greeting';
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/Users";
import { GET_ALL_USERS,GET_USER } from "./Queries/User";
import { GET_ALL_AUTOR,GET_AUTOR } from "./Queries/Autor";
import { CREATE_AUTOR, UPDATE_AUTOR,DELETE_AUTOR } from "./Mutations/Autores";
import { GET_ALL_CIUDADES, GET_CIUDADES } from "./Queries/Ciudad";
import { CREATE_CIUDAD, DELETE_CIUDAD, UPDATE_CIUDAD } from "./Mutations/Ciudades";
import { GET_ALL_CUBIERTAS, GET_CUBIERTAS } from "./Queries/Cubierta";
import { CREATE_CUBIERTA, DELETE_CUBIERTA, UPDATE_CUBIERTA } from "./Mutations/Cubiertas";
import { GET_ALL_PAISES, GET_PAISES } from "./Queries/Pais";
import { CREATE_PAIS, DELETE_PAIS, UPDATE_PAIS } from "./Mutations/Paises";
const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER,
        getAutor:GET_AUTOR,
        getAllAutores:GET_ALL_AUTOR,
        getCiudad:GET_CIUDADES,
        getAllCiudades:GET_ALL_CIUDADES,
        getCubiertas:GET_CUBIERTAS,
        getAllCubierta:GET_ALL_CUBIERTAS,
        getPais:GET_PAISES,
        getAllPaises:GET_ALL_PAISES
    }
});

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser: CREATE_USER,
        deleteUser:DELETE_USER,
        updateUser:UPDATE_USER,
        createAutor: CREATE_AUTOR,
        deleteAutor:DELETE_AUTOR,
        updateAutor:UPDATE_AUTOR,
        createCiudad: CREATE_CIUDAD,
        deleteCiudad:DELETE_CIUDAD,
        updateCiudad:UPDATE_CIUDAD,
        updateCubierta:UPDATE_CUBIERTA,
        createCubierta:CREATE_CUBIERTA,
        deleteCubierta:DELETE_CUBIERTA,
        createPais:CREATE_PAIS,
        updatePais:UPDATE_PAIS,
        deletePais:DELETE_PAIS
    }

})

export const schema =  new GraphQLSchema(
    {
        query:RootQuery,
        mutation:Mutation
    }
);
