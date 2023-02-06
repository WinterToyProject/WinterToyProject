import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import MarkerModal from './MarkerModal';

const {kakao} = window;

function LoginMap() {


  const [ is_modal, setModal] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const normalMarker = useSelector((state) => state.marker.normal)
  

  useEffect(() => {
    const container = document.getElementById('Loginmap');
    const options =  {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
      
    };
  
    const map = new kakao.maps.Map(container, options);


    if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
    }
    
  function displayMarker(locPosition, message) {

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({  
      map: map, 
      position: locPosition
  }); 

  var clickmarker = new kakao.maps.Marker({
    position: map.getCenter()
  });

  clickmarker.setMap(map);

  // 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
  // 클릭한 위도, 경도 정보를 가져옵니다 
  var latlng = mouseEvent.latLng; 

  setLatitude(latlng.getLat())
  setLongitude(latlng.getLng())
  
  // 마커 위치를 클릭한 위치로 옮깁니다
  marker.setPosition(latlng);

  
})

kakao.maps.event.addListener(clickmarker, 'click', function(){
  setModal(true)
})

  var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });
  
  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(map, marker);
  
  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);      
    }    



    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  
  }, [normalMarker])

  const closeModal = () => {
    setModal(false)
  }
  


  return (
    <><div id="Loginmap" style={{
      width: '100%',
      height: '800px',
    }}></div>
    {is_modal? <MarkerModal close={closeModal} latitude={latitude} longitude={longitude} />
      : null }
      </>
  )
}

export default LoginMap;