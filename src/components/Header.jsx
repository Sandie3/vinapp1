import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>

            <header className="headerContainer">

                <h2 id="headerTekst">The taste of great wine, all over the world</h2>
                <img src="#" alt="Billede af noget med vin" />

                <div className="searchBarContainer">
                    <input type="text" />
                    <button id="headerSubmit">Submit</button>
                </div>
            </header>

        </Fragment>
    )
}

export default Header
