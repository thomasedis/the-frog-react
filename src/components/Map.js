import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow  } from 'google-maps-react';




const Mapp = function() {
   const containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '100%'
    }
    const [stores, setStore] = useState([
        {latitude: 10.8830253, longitude: 106.7795147},
        {latitude: 10.884800, longitude: 106.781375},
        {latitude: 10.884800,  longitude: 106.781375},
    ])
     
    const [liMe, setLiMe] = useState(0)
    const [longMe, setLongMe] = useState(0)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLiMe(position.coords.latitude)
            setLongMe(position.coords.longitude)
          });
    }, [])

    function displayMarkers(){
        return stores.map((store, index) => {
          return <Marker 
          key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         icon={{
            url: "./image/icon1.png",
            anchor: new window.google.maps.Point(32,32),
            scaledSize: new window.google.maps.Size(40,40)
        }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
      

   
    return (
        <div className="MapDemo" style={{height: '600px'}}>
          <Map
            google={window.google}
            zoom={17}
            containerStyle={containerStyle}
            initialCenter={liMe !== 0 && longMe !== 0 ? { lat:liMe, lng: longMe}:  { lat:10.842931199999999, lng: 106.6369024}}
            draggable={true}
            >
            <Marker position={liMe !== 0 && longMe !== 0 ? { lat:liMe, lng: longMe}:  { lat:10.842931199999999, lng: 106.6369024}}>
              <InfoWindow>
                  <p>Something..</p>  
                </InfoWindow>
              </Marker>
            {displayMarkers()}
          </Map>
        </div>
    )
  
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCWVs7Gy1syqpUYjxLCC-8vUHhE02Mxcuc'),

  })(Mapp)

  