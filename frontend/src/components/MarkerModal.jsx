import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const MarkerModal = (props) => {
  // 사용자가 지정한 마커 이름을 담아냅니다.
  const [text, setText] = useState();

  const selectTitle = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  // 마커를 생성할 때 사용되는 함수입니다.
  const addMarker = (e) => {

    axios.post('http://localhost:8080/gps/save',
    {
      latitude: props.latitude,
      longitude: props.longitude,
      title: text,
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch(function (error) {
      alert('실패했습니다!');
    });
    /*let marker = {
      // Map.js에서 받아온 값도 있고 여기서 생성한 값도 있습니다.
      latitude: props.latitude,
      longitude: props.longitude,
      title: title,
    };*/

    

    // 마커 생성 모달 창을 닫습니다.
    props.close();
  };

  return (
    <React.Fragment>
      <Component onClick={props.close} />
      <ModalComponent>
        <ModalExitBtn onClick={props.close}>
          <CloseIcon />
        </ModalExitBtn>
        <ModalHeader>마커를 생성하시겠습니까?</ModalHeader>
        <ModalInput>
          <TextField
            id="standard-basic"
            label="장소를 입력해주세요."
            style={{ width: "100%" }}
            onChange={selectTitle}
          />
        </ModalInput>
        <ModalButtonContainer>
          <ModalSubmitBtn onClick={addMarker}>마커 생성</ModalSubmitBtn>
        </ModalButtonContainer>
      </ModalComponent>
    </React.Fragment>
  );
};

const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 10;
`;

const ModalComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 300px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalHeader = styled.div`
  margin-top: 30px;
  font-weight: 600;
  font-size: 18px;
`;

const ModalInput = styled.div`
  box-sizing: border-box;
  width: 50%;
`;
const ModalButtonContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 30px;
`;
const ModalSubmitBtn = styled.button`
  width: 100%;
  background-color: #ffe812;
  border: none;
  outline: none;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  border-radius: 4px;
  &:hover {
    opacity: 0.7;
  }
`;
const ModalExitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 12px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  color: black;
`;

export default MarkerModal;
