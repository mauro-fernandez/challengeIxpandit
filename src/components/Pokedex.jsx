import React from 'react'
import CardPokemon from './PokemonCard'

const Pokedex = (props) => {

    const { pokemons } = props

    return (
        <div>
            <div>
                <h1>Resultado de la búsqueda</h1>
            </div>
            <div className='pokedex-grid'>
                {pokemons && pokemons?.map((el,index) => {
                    return (
                        <CardPokemon key={index} pokemon={el}/>
                    )}
                )
                }
              
            </div>
        </div>
    )
}

export default Pokedex