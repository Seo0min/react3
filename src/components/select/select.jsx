import React from "react";
import styled from "styled-components";

const Select = () => {
  return (
    <>
      <StBox>
        <Parent>
          <DropdownContainer>
            <DropdownLeft>
              <DropBtnLeft>Select</DropBtnLeft>
              <DropdownContentLeft>
                <ItemHover>리액트</ItemHover>
                <ItemHover>자바</ItemHover>
                <ItemHover>스프링</ItemHover>
                <ItemHover>리엑트네이티브</ItemHover>
              </DropdownContentLeft>
            </DropdownLeft>
          </DropdownContainer>
          {/* 우측 */}
          <DropdownRight>
            <DropBtnRight>Select</DropBtnRight>
            <DropdownContentRight>
              <ItemHover>리액트</ItemHover>
              <ItemHover>자바</ItemHover>
              <ItemHover>스프링</ItemHover>
              <ItemHover>리엑트네이티브</ItemHover>
            </DropdownContentRight>
          </DropdownRight>
        </Parent>
      </StBox>
    </>
  );
};

const StBox = styled.div`
  display: flex;
  margin-bottom: 200px;
`;
const Parent = styled.div`
  overflow-y: auto;
  /* y축 내용이 어떻게 보여질지 정함 */
  border: 1px solid blue;
  width: 800px;
  height: 80px;
`;
const DropBtnLeft = styled.button`
  width: 160px;
  height: 50px;
  padding: 16px;
  font-size: 16px;
  border: none;
`;
const DropdownContentLeft = styled.div`
  display: none;
  position: absolute;
  text-align: center;
  background-color: #f1f1f1;
  min-width: 160px;
`;
const DropdownLeft = styled.div`
  width: 160px;
  height: 50px;
  font-size: 16px;
  border: none;
  &:hover {
    ${DropdownContentLeft} {
      display: block;
    }
  }
`;
const DropdownContainer = styled.div`
  display: block;
  width: 100px;
  height: 70px;
  float: left;
  position: static;
`;
/* 우측 */

const DropBtnRight = styled.button`
  width: 160px;
  height: 50px;
  font-size: 16px;
  border: none;
  margin-left: 100px;
`;
const DropdownContentRight = styled.div`
  display: none;
  position: absolute;
  text-align: center;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
  margin-left: 100px;
`;
const DropdownRight = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownContentRight} {
      display: block;
    }
  }
`;
const ItemHover = styled.p`
  &:hover {
    background-color: lightblue;
  }
`;

export default Select;
