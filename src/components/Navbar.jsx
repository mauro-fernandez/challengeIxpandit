import React from 'react'

const NavBar = () => {

    const pokePhoto = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div>
                <div className='navbar-title'>Pokemon finder</div>
                <div className='navbar-subTitle'>El que quiera Pokemons, que los busque...</div>
            </div>
            <div>
                <img src={pokePhoto} alt="PokePhoto" className='navbar-image'/>
            </div>
        </nav>
    )
}

export default NavBar