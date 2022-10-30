import React from "react";

const Footer = () => {
    const onClick = () => {
       return window.location.href = "https://github.com/mauro-fernandez/challengeIxpandit";
    }

    return (
    <footer>
        <div className="footer-container">
            <div  className="footer-name">
                <h4>Hecho por Mauro E. N. Fernandez</h4>
            </div>
            <div>
                <button className="footer-button" onClick={onClick}>Link a mi repo</button>
            </div>
        </div>
  </footer>
)
}

export default Footer;