import React, { useEffect } from 'react'
import Header from '../components/Header';
import './Home.css';

const {kakao} = window;

function Home() {


  useEffect(() => {
    const container = document.getElementById('map');
    const options =  {
      center: new kakao.maps.LatLng(36.517711, 127.802537),
      level: 12
  };
  
  
    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  
}, [])



  return (
    <>
    <Header />
    <div id="map"></div>
    </>
  )
}

export default Home;
