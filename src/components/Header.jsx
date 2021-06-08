import React, { Fragment } from 'react'

const Header = () => {
    return (
        <>

        <header className="headerContainer">

            <h2 id="headerTekst">The taste of great wine, all over the world</h2>
            <img src="#" alt="Billede af noget med vin" />

            <div className="searchBarContainer">
                <button id="headerSubmit">Submit</button>
                <input type="text" />
            </div>
        </header>

        </>
    )
}

export default Header
