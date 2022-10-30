import React from "react";

const PageNotFound = () => {
    const img = require('../assets/pikachuFace.png')
    return (
        <div className="notFound-container">
            <div>
                <img className="notFound-image" src={img} alt="Pikachu meme"></img>
            </div>
            <div>
                <h2>No hemos podido encontrar tu pokemon. Intenta con otro...</h2>
            </div>
        </div>
    )
}

export default PageNotFound

