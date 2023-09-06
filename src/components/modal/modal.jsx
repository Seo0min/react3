import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [modalFirst, setModalFirst] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);

  const toggleModalFirst = () => {
    setModalFirst(!modalFirst);
  };

  const toggleModalSecond = () => {
    setModalSecond(!modalSecond);
  };

  const ClickClose = (event) => {
    if (modalSecond && !event.target.closest(".second-modal-content")) {
      setModalSecond(false);
    }
  };
  // 1. modalSecond를 통해 현재 두 번째 모달이 열려 있는 상태인지 확인(true면 열린 것!)
  // 2. event.target.closest('.second-modal-content)를 사용하여 second-modal-content를 class로 사용한 가장 가까운 요소 찾기
  // 있으면 true, 없으면 false
  // 3. 두 조건 모두 참이라면 setModalSecond(false)를 호출하여 모달을 닫음

  return (
    <>
      <FlexBox>
        {/* Modal without Outside Click Close */}
        <div>
          <FirstBtnModal onClick={toggleModalFirst}>open modal</FirstBtnModal>
          {modalFirst && (
            <Modals>
              <Overlay></Overlay>
              <ModalContent>
                <Title>
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                  않아요
                </Title>
                <CloseModal onClick={toggleModalFirst}>닫기</CloseModal>
                <ConfirmButton>확인</ConfirmButton>
              </ModalContent>
            </Modals>
          )}
          ;
        </div>

        {/* Modal with Outside Click Close */}
        <div>
          <SecondBtnModal onClick={toggleModalSecond}>
            open modal
          </SecondBtnModal>
          {modalSecond && (
            <Modals onClick={ClickClose}>
              <Overlay></Overlay>
              <ModalContent>
                <Title>
                  닫기 버튼이 1개가 있고, 외부 영역을 누르면 모달이 닫혀요
                </Title>
                <SecondCloseModal onClick={toggleModalSecond}>
                  X
                </SecondCloseModal>
              </ModalContent>
            </Modals>
          )}
          ;
        </div>
      </FlexBox>
    </>
  );
};

export const FlexBox = styled.div`
  display: flex;
`;
const FirstBtnModal = styled.button`
  width: 250px;
  height: 150px;
  padding: 10px 20px;
  display: block;
  font-size: 16px;
  border-radius: 15px;
  border: 3px solid
    ${(props) => (props.variant === "outline" ? "yellow" : "pink")};
  background-color: ${(props) =>
    props.variant === "outline" ? "pink" : "yellow"};
  color: ${(props) => (props.variant === "outline" ? "white" : "black")};
`;
const SecondBtnModal = styled.button`
  width: 180px;
  height: 120px;
  padding: 10px 20px;
  margin: 20px;
  display: block;
  font-size: 16px;
  border-radius: 10px;
  border: 3px solid
    ${(props) => (props.variant === "outline" ? "grey" : "lightblue")};
  background-color: ${(props) =>
    props.variant === "outline" ? "lightblue" : "grey"};
  color: ${(props) => (props.variant === "outline" ? "white" : "black")};
`;
const Modals = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
`;
const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); //수평과 수직으로 이동 (정중앙 되기 위해)
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  height: 200px;
`;
const Title = styled.div`
  padding-top: 50px;
`;
const CloseModal = styled.button`
  position: absolute;
  left: 215px;
  top: 150px;
  padding: 10px 15px;
  border-radius: 10px;
`;
const SecondCloseModal = styled.button`
  position: absolute;
  left: 420px;
  top: 10px;
  padding: 10px 15px;
  border-radius: 10px;
`;
const ConfirmButton = styled.button`
  position: absolute;
  left: 285px;
  top: 150px;
  padding: 10px 15px;
  border-radius: 10px;
`;

export default Modal;
