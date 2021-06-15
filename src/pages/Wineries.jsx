import { useState, useEffect } from 'react'

import Wmap from '../components/Wmap'
import { getWinerie } from '../apicall/wineries'

const Wineries = () => {

    const [win, setWin] = useState()
    const [error, setError] = useState()
    const [zoom, setZoom] = useState(5)
    const [coords, setCoords] = useState([41,14])

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
    
    return (
        <>
        {
            win &&
            <>
                <header>
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
                                        <button type="submit" onSubmit={( e ) => {setCoords(cords); setZoom(13)}} value="See on map" >See on map</button>
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
