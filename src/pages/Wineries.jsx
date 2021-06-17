import { useState, useEffect } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

// import Wmap from '../components/Wmap'
import { getWinerie } from '../apicall/wineries'

const Wineries = () => {

    const [win, setWin] = useState()
    const [error, setError] = useState()
    const [zoom, setZoom] = useState(5)
    const [coords, setCoords] = useState([41,14])
    const [name, setName] = useState()
    const [location, setLocation] = useState()

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

    function ChangeView({ coord, zoom }) {
        const map = useMap();
        map.setView(coords, zoom);
        return null;
    }
    return (
        <>
        {
            win &&
            <>
                <header id="mapCard">
                    {/* <Wmap cord={coords} zoom={zoom} /> */}
                    <MapContainer style={{height: 350 + "px"}} center={coords} zoom={zoom} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ChangeView center={coords} zoom={zoom} />
                        <Marker position={coords}>
                            <Popup>
                                {name}<br /> {location}
                            </Popup>
                        </Marker>
                    </MapContainer>
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
                                        <input className="findWin" type="submit" onClick={ ( e ) => { setCoords(cords); setZoom(17); setName(w.name); setLocation(w.location); } } value="See on map" />
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
