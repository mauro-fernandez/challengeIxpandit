import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2"

export const getApiInfo = async (limit = 649, offset = 0) => {
    try {
        const apiJson = await axios.get(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`)
        return apiJson.data      
    } catch (error) {
        console.log(error)
    }
  }

export const getOnePokemonData = async (url) => {
    try {
        const apiJson = await axios.get(url)
        return apiJson.data
    } catch (error) {
        console.log(error)
    }
}