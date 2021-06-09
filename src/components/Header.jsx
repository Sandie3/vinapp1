import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>

            <header className="headerContainer">

                <h2 id="headerTekst">The taste of great wine, all over the world</h2>
                <img src="https://i.imgur.com/CKOlyTl.png" alt="Billede af noget med vin" />

                <div className="searchBarContainer">
                    <select name="" id="searchBarSelect">
                        <option value="0">Test1</option>
                        <option value="0">Test2</option>
                        <option value="0">Test3</option>
                        <option value="0">Test4</option>
                        <option value="0">Test5</option>
                        <option value="0">Test6</option>
                    </select>
                    <input type="submit" id="headerSubmit" value="Submit" />
                </div>
            </header>

        </Fragment>
    )
}

export default Header
