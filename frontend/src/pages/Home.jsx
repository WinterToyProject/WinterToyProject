import React, { useEffect } from 'react'
import './Home.css';

const {kakao} = window;

export default function Home() {


  useEffect(() => {
    const container = document.getElementById('map');
    const options =  {
      center: new kakao.maps.LatLng(37.497990, 127.027417),
      level: 3
  };
  
  
    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  
}, [])



  return (
    <div id="map"></div>
  )
}
