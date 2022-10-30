import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2"

// const apiJson = await axios.get(`${baseUrl}/pokemon?offset=0&limit=1154`)
/*
export const searchPokemon = async (pokemon) => {
    try {
        const apiJson = await axios.get(`${baseUrl}/pokemon/${pokemon}`)
        // console.log(apiJson.data)
        return apiJson.data
        
    } catch (error) {
        console.log(error)
    }
}
*/

export const getApiInfo = async (limit = 1154, offset = 0) => {
    try {
        const apiJson = await axios.get(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`)
        // console.log(apiJson.data)
        return  apiJson.data
      
    } catch (error) {
        console.log(error)
    }
  }

  export const getOnePokemonData = async (url) => {
    try {
        const apiJson = await axios.get(url)
        // console.log(apiJson.data)
        return apiJson.data
        
    } catch (error) {
        console.log(error)
    }
}