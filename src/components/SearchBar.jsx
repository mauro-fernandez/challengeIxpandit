import React, { useState } from "react";

const SearchBar = (props) => {
    const { find, setFilteredPokemons } = props
    
    const [search, setSearch] = useState('')

    const onChange = (evento) => {
        setSearch(evento.target.value)
    }

    const onClick = () => {
        const trim = search.trim("").toLowerCase()
        const result = find(trim)
        setFilteredPokemons(result)
    }

return (
    <div className="searchBar-container">
        <div className="searchBar">
        <input placeholder='Ingrese el nombre a buscar' onChange={onChange}></input>
        </div>
        <div className="searchBar-button">
            <button onClick={onClick}>Buscar</button>
        </div>
    </div>
)

}

export default SearchBar