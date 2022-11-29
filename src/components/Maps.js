import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '200px',
  height: '200px'
};

const center = {
  lat: 45.786710, 
  lng: 15.934430
};

function Maps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyByoQYBfJTocPNEFudDTADU_mbYERz5sVs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Maps)