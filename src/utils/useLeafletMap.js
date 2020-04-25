import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-fullscreen"
import "leaflet-fullscreen/dist/leaflet.fullscreen.css"
import crownIcon from "../assets/icons/krol-pik-crown-logo.svg"

const useLeafletMap = (coordinatesArray = [], mapid) => {
  const mapRef = useRef(null)
  const myIcon = L.icon({
    iconUrl: crownIcon,
    iconSize: [38, 48],
    iconAnchor: [19, 48],
    popupAnchor: [0, -48],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
  })
  useEffect(() => {
    //create map
    mapRef.current = L.map(mapid, { zoomControl: false }).setView(
      coordinatesArray,
      14
    )

    //add map layers
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | © <a href="https://www.mapbox.com/">Mapbox</a>',
        accessToken: process.env.GATSBY_MAPBOX_ACCESS_TOKEN,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mapRef.current)

    //add full-screen button
    mapRef.current.addControl(
      new L.Control.Fullscreen({
        position: "bottomright",
      })
    )

    //add zoom with new position
    L.control.zoom({ position: "bottomright" }).addTo(mapRef.current)

    //add marker
    L.marker(coordinatesArray, { icon: myIcon })
      .addTo(mapRef.current)
      .bindPopup("Salon rowerowy Król Pik")
  }, [coordinatesArray, mapid, myIcon])

  return
}

export default useLeafletMap
