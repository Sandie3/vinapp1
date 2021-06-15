import { useEffect } from 'react'


import { createMap, delMap, changeView } from '../apicall/leaflet'


const Wmap = (props) => {

  console.log(props)

  // Create map element and delete after page leave
  useEffect(() => {
    createMap()
    return () => {
      delMap()
    };
  }, [] ) //Empty means load on page lead



  // When weather is loaded then get coords for map
  useEffect(() => {
    // If there is weather then get coords from weather data for map
    if (props.cords) {
      changeView(props.cords)
    }
  }, [ props.cords ])
  


  return (
    <>
      <div id="mapcontainer" style={{height: 400 + "px", backgroundColor: "silver"}}></div>
    </>
  )
}

export default Wmap