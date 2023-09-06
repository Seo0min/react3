import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPriceChange = (event) => {
    const value = event.target.value;
    const numCheck = /^[0-9,]/.test(value);
    if (!numCheck && value) {
      return;
    }
    if (numCheck) {
      const numValue = parseFloat(value.replaceAll(",", ""));
      const formValue = numValue.toLocaleString("ko-KR");
      setPrice(formValue);
    }
  };
  const onSubmitChange = () => {
    if (!name.length || !price.length) {
      return alert("값을 입력해주세요");
    } else {
      alert(`이름: ${name} 가격: ${price.replace(/,/g, "")}`);
      // 문자열에서 모든 콤마를 찾아 빈 문자열로 대체한다는 정규표현식
      // /,/ 정규 표현식 내에서 , 를 찾는다.
      // 전역을 검색한다.
      // ' ' 빈 문자열로 대체한다.
    }
    setName("");
    setPrice(0);
  };
  return (
    <div>
      이름: &nbsp; <input onChange={onNameChange} type="text" value={name} />
      &nbsp; 가격: &nbsp;{" "}
      <input onChange={onPriceChange} type="text" value={price} />
      <ButtonStyle onClick={onSubmitChange}>저장</ButtonStyle>
    </div>
  );
};

const ButtonStyle = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
`;
export default Input;
