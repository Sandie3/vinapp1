import { useState, useEffect } from 'react'

import Wmap from '../components/Wmap'
import { getWinerie } from '../apicall/wineries'

const Wineries = (prop) => {

    const [win, setWin] = useState()
    const [error, setError] = useState()
    const [zoom, setZoom] = useState()

    useEffect(() => {
        getWinerie().then(data => {
            setWin(data)
            setError()
            console.log(data)
        }).catch(err => {
            setError(err);
            setWin()
            console.log(err)
        })
    }, [])

    if (typeof zoom == 'undefined') return setZoom(5);
    
    return (
        <>
        {
            win &&
            <>
            
            
            <header>
                <Wmap cord={ [ win[0].coordy, win[0].coordx ] } zoom={zoom} />
            </header>

            <main className="wineriesContainer">
                {
                    win.map((w, i) => {
                        return(
                            <section className="wineryOption" key={w._id}>
                                <img src="https://i.imgur.com/nt1WAkC.png" alt="Picture of the Winery" />
                                <div className="wineryOptionContent">
                                    <h2>Name: {w.name}</h2>
                                    <h3>Country: {w.location}</h3>
                                    <p>{w.description}</p>
                                    <input type="submit" value="See on map" />
                                </div>
                            </section>
                        )
                    })
                }
            </main>
            </>
        }
        {
            error &&
            <h1>{error}</h1>
        }
        </>
    )
}

export default Wineries
