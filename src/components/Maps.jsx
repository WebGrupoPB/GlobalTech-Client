import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


/*
    Global Tech: Guatemala 

    direccion: Calz. Atanasio Tzul 20-74, Cdad. de Guatemala 01012
    lat: 14.596199,
    lng: -90.541980,
*/ 


/*
    Global Tech: Xela 

    direccion: 4 calle 19-29 zona 3 Quetzaltenango, Guatemala
    lat: 14.8445599,
    lng: -91.5237950,
*/ 




const containerStyle = {
  width: '100%',
  height: '75vh'
};

const center = {
    lat: 14.8445599,
    lng: -91.5237950,
};

const centerGuatemala = {
    lat: 14.596199,
    lng: -90.541980,
};

const centerXela = {
    lat: 14.8445599,
    lng: -91.5237950,
};




function Maps({id}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCscKjHtmXETUk2EaN9Oc0XMK7Ez2cll8Y"
  })

    let centerCoords;

    if (id === 0) {
        centerCoords = centerGuatemala;
    } else if (id === 1) {
        centerCoords = centerXela;
    }


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoords}
        zoom={17}
      >
        
        <Marker position={centerCoords} />
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)

