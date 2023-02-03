const addMarkerAX = (marker) => {
  return function (dispatch){
    // 로그인을 했을 때만 마커를 생성할 수 있기 때문에 token 값을 서버에 넘겨줍니다.
    const _token= sessionStorage.getItem("JWT")
    let token = {
      headers : { authorization: `Bearer ${_token}`}
    }
    // 생성된 마커 정보를 서버에 보냅니다.
    axios.post(`${config.api}/marker`, {
      markername: marker.title, location: [marker.latitude.toString(), marker.longitude.toString()], 
    }, token).then((response) => {
      // 서버에서 마커 오브젝트 id와 boardcount를 보냅니다.
      console.log(response.data)
      let marker_info = {...marker, id: response.data.markerId, boardcount: 0}
      // 액션 함수에 마커 정보를 담아서 보냅니다.
      dispatch(addMarker(marker_info))
    })
  }
}

const ADD_MARKER = "ADD_MARKER";

//액션함수
const addMarker = createAction(ADD_MARKER, (marker) => ({marker}))

//리듀서
//새로운 marker 정보를 redux store에 저장
    [ADD_MARKER]: (state, action) => produce(state, (draft) => {
      draft.normal.unshift(action.payload.marker)
    });