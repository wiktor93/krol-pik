import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"
import "leaflet-fullscreen/dist/leaflet.fullscreen.css"

import crownIcon from "../assets/icons/krol-pik-crown-logo.svg"
import data from "../assets/data"

//importing leaflet and leaflet-fullscreen when "window" will be available
const L = typeof window !== `undefined` ? require("leaflet") : null
typeof window !== `undefined` && require("leaflet-fullscreen")

const useLeafletMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    //create map
    mapRef.current = L.map("mapid", { zoomControl: false }).setView(
      data.coordinates,
      14
    )
    //create icon
    const myIcon = L.icon({
      iconUrl: crownIcon,
      iconSize: [38, 48],
      iconAnchor: [19, 48],
      popupAnchor: [0, -48],
    })

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
    L.marker(data.coordinates, { icon: myIcon })
      .addTo(mapRef.current)
      .bindPopup("Salon rowerowy Król Pik")
  }, [])
}

export default useLeafletMap
