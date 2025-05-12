//Importação dos pacotes
import axios from 'axios';
import { Planets, Root } from '../planets/planets'

//Declaração de atributos
const API_URL = 'https://dragonball-api.com/api'

export const fetchPlanetList = async (offset = 0, limit=100):
 Promise<Planets[]> => {

    //faça a consulta no serviço
    const response = await 
    axios.get(`${API_URL}/planets?offset=${offset}&limit=${limit}`)


    //verifico se tem retorno na resposta
    //Aqui estamo definindo o tipo de resposta baseado em um contrato
    const data: Root = await response.data;
  


    //Agora o typescript conhece que data tem uma propriedade results.
    

    return data.items
};

export const fetchPlanetById = async (id: string):
Promise<Planets> => {

    return {} as Planets
};

export const fetchPlanetByFilter = async (
    name: string,
    isDestroyed: boolean,):
Promise<Planets> => {

    return {} as Planets
};