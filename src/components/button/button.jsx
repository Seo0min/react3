import React from "react";
import styled from "styled-components";
import { FlexBox } from "../modal/modal";
import Icon from "../../assets/icon";

const Button = () => {
  const PrimaryButtonClickHandler = () => {
    alert("버튼을 만들어보세요");
  };

  const NegativeButtonClickHandler = () => {
    prompt("어렵나요?");
  };
  return (
    <>
      <FlexBox>
        <FirstBox
          onClick={PrimaryButtonClickHandler}
          back-color={"yellow"}
          border-color={"lightblue"}
        >
          Large Primary Button
        </FirstBox>
        <SecondBox back-color={"lightblue"} border-color={"yellow"}>
          <Icon color={"red"} />
          Medium
        </SecondBox>
        <ThirdBox back-color={"yellow"} border-color={"lightblue"}>
          {" "}
          Small{" "}
        </ThirdBox>
      </FlexBox>
      <FlexBox>
        <FirstBox
          onClick={NegativeButtonClickHandler}
          back-color={"yellow"}
          border-color={"lightblue"}
        >
          Large Negative Button
        </FirstBox>
        <SecondBox back-color={"lightblue"} border-color={"yellow"}>
          <Icon color={"blue"} />
          Medium
        </SecondBox>
        <ThirdBox back-color={"yellow"} border-color={"lightblue"}>
          Small
        </ThirdBox>
      </FlexBox>
    </>
  );
};

const FirstBox = styled.button`
  width: 200px;
  height: 100px;
  margin: 10px 10px 0px 0px;
  border-radius: 20px;
  border: 3px solid ${(props) => props["border-color"]};
  background-color: ${(props) => props["back-color"]};
  color: black;
`;
const SecondBox = styled.button`
  width: 150px;
  height: 100px;
  margin: 10px 10px 0px 0px;
  border-radius: 20px;
  border: 3px solid ${(props) => props["border-color"]};
  background-color: ${(props) => props["back-color"]};
  color: black;
`;
const ThirdBox = styled.button`
  width: 100px;
  height: 70px;
  margin: 10px 10px 0px 0px;
  border-radius: 20px;
  border: 3px solid ${(props) => props["border-color"]};
  background-color: ${(props) => props["back-color"]};
  color: black;
`;

export default Button;
