import React from 'react'

const Wineries = () => {
    return (
        <>
        <header>
            <img src="https://i.imgur.com/GPARBvt.png" alt="Maps billede?" />
        </header>

        <main className="wineriesContainer">

            <section className="wineryOption">
                <img src="https://i.imgur.com/nt1WAkC.png" alt="Picture of the Winery" />
                <div className="wineryOptionContent">
                    <h2>Name: Vinovino</h2>
                    <h3>Country: Italy</h3>
                    <p>Vinovino is the best place in Italy to get your wine</p>
                    <input type="submit" value="See on map" />
                </div>
            </section>

            <section className="wineryOption">
                <img src="https://i.imgur.com/nt1WAkC.png" alt="Picture of the Winery" />
                <div className="wineryOptionContent">
                    <h2>Name: Vinovino</h2>
                    <h3>Country: Italy</h3>
                    <p>Vinovino is the best place in Italy to get your wine</p>
                    <input type="submit" value="See on map" />
                </div>
            </section>

            <section className="wineryOption">
                <img src="https://i.imgur.com/nt1WAkC.png" alt="Picture of the Winery" />
                <div className="wineryOptionContent">
                    <h2>Name: Vinovino</h2>
                    <h3>Country: Italy</h3>
                    <p>Vinovino is the best place in Italy to get your wine</p>
                    <input type="submit" value="See on map" />
                </div>
            </section>

        </main>
        </>
    )
}

export default Wineries
