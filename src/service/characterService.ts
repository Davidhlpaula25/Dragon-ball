//Importação dos pacotes
import axios from 'axios';
import { Characters, Root } from '../character/character';

//Declaração de atributos
const API_URL = 'https://dragonball-api.com/api'

export const fetchCharacterList = async (offset = 0, limit=100):
 Promise<Characters[]> => {

    //faça a consulta no serviço
    const response = await 
    axios.get(`${API_URL}/characters?offset=${offset}&limit=${limit}`)


    //verifico se tem retorno na resposta
    //Aqui estamo definindo o tipo de resposta baseado em um contrato
    const data: Root = await response.data;
  


    //Agora o typescript conhece que data tem uma propriedade results.
    

    return data.items
};

export const fetchCharacterById = async (id: string):
Promise<Characters> => {

    return {} as Characters
};

export const fetchCharacterByFilter = async (
    name: string,
    gender: string,
    race: string,
    affiliation: string):
Promise<Characters> => {

    return {} as Characters
};