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


  useEffect(() => {
    if (props.cord) {
      changeView(props.cord)
    }
  }, [ props.cord ])
  


  return (
    <>
      <div id="mapcontainer" style={{height: 350 + "px", backgroundColor: "silver"}}></div>
    </>
  )
}

export default Wmap