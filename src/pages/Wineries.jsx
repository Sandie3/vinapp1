import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet'
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
                    <MapContainer style={{height: 350 + "px"}} center={coords} zoom={zoom} scrollWheelZoom={false} zoomControl={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ChangeView center={coords} zoom={zoom} />
                        <ZoomControl position="topright" />
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
                                    <div className="winerieImageContainer">
                                        <img className="winerieImage" src={"http://localhost:5001/images/" + w.image} alt="Picture of the Winery" />
                                    </div>
                                    <div className="wineryOptionContent">
                                        <h2>{w.name}</h2>
                                        <h3>{w.location}</h3>
                                        <p>{w.description}</p>
                                        <input className="findWin" type="submit" value="View" onClick={ ( e ) => { setCoords(cords); setZoom(17); setName(w.name); setLocation(w.location); } } defaultValue="See on map" />
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
