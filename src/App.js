import './App.css';
import React, {useEffect, useState} from 'react'
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import PageNotFound from './components/PageNotFound';
import { getApiInfo, getOnePokemonData } from './controllers/api'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getAllPokemon = async () => {
    setIsLoading(true)
    const allPokemonFromApi = await getApiInfo()
    const promiseForAllInfo = allPokemonFromApi.results.map(async (pokemon)=> {
      return await getOnePokemonData(pokemon.url)
    })
    const results = await Promise.all(promiseForAllInfo)
    setPokemons(results)
    setFilteredPokemons(results)
    setIsLoading(false)
  }

  const searchPokemon = (pokemon) => {
    const result = pokemons.filter(el => el.name.startsWith(pokemon))
    return result
  }

  useEffect(() => {
    getAllPokemon()
  },[])

  // <Pokedex pokemons={filteredPokemons}/>
  return (
    <div className='app-container'>
      <NavBar/>
      <SearchBar find={searchPokemon} setFilteredPokemons={setFilteredPokemons}/>
      {isLoading ?
      <LoadingSpinner/> :
      (<div> 
        {filteredPokemons.length === 0 ?
        <PageNotFound></PageNotFound> :
        <Pokedex pokemons={filteredPokemons}/>}
      </div>) 
      }
      <Footer/>   </div>
  );
}

export default App;
