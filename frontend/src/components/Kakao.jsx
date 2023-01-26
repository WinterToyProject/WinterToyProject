import React, { useEffect } from 'react'

export default function Kakao() {

  

  useEffect(() => {
    const container = document.getElementById('map');
    const options =  {
      center: new Kakao.maps.LatLng(33.450701, 126.570667),
      level: 4
  };
  
  const map = new Kakao.maps.Map(container, options);
  
}, [])
  


  return (
    <div id="map" style={{
      width: '500px',
      height: '500px',
    }}></div>
  )
}