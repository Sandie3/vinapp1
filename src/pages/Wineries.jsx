import { useState, useEffect } from 'react'

import Wmap from '../components/Wmap'
import { getWinerie } from '../apicall/wineries'

const Wineries = () => {

    const [win, setWin] = useState()
    const [error, setError] = useState()
    const [zoom, setZoom] = useState(5)
    const [coords, setCoords] = useState([41,14])

    const getWin = () => {
        window.scrollTo({
            top: 0,
            screenLeft: 0,
            behavior: 'smooth'
        })
        getWinerie().then(data => {
            setWin(data)
            setError()
            console.log(data)
        }).catch(err => {
            setError(err);
            setWin()
            console.log(err)
        })
    }
    
    useEffect(() => {
        getWin();
    }, [coords])
    
    return (
        <>
        {
            win &&
            <>
                <header id="mapCard">
                    <Wmap cord={coords} zoom={zoom} />
                </header>
                <main className="wineriesContainer">
                    {
                        win.map((w, i) => {
                            let cords = [w.coordy, w.coordx]
                            return(
                                <section className="wineryOption" key={w._id}>
                                    <img src="https://i.imgur.com/nt1WAkC.png" alt="Picture of the Winery" />
                                    <div className="wineryOptionContent">
                                        <h2>Name: {w.name}</h2>
                                        <h3>Country: {w.location}</h3>
                                        <p>{w.description}</p>
                                        <input type="submit" onClick={ ( e ) => { setCoords(cords); setZoom(17) } } value="See on map" />
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
