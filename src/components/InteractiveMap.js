import React from "react"
import styled from "styled-components"

import data from "../assets/data"
import useLeafletMap from "../utils/useLeafletMap"

const Wraper = styled.section`
  margin: 0 auto 50px;
  width: 90%;
  max-width: 600px;
`

const MapContainer = styled.div`
  width: 100%;
  height: 340px;
`

const InteractiveMap = () => {
  useLeafletMap(data.coordinates, "mapid")

  return (
    <Wraper>
      <h2>Znajdź nas na mapie</h2>
      <MapContainer id="mapid"></MapContainer>
    </Wraper>
  )
}
export default InteractiveMap
