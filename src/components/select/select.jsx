import React, { useState } from "react";
import styled from "styled-components";
import Select2 from "./select2";

const options = ["리액트", "자바", "스프링", "노드"];

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  // 1. option은 클릭된 항목을 나타낸다.
  // 2. option 값을 setSelectedOption 함수에 전달하여 선택된 항목을 업데이트한다.
  // 3. setIsOpen(false)를 통해 열려 있는 드롭다운을 닫는다.

  return (
    <StBox>
      <Parent>
        <DropdownContainer>
          <DropdownLeft>
            <DropBtnLeft onClick={toggleDropdown}>
              {selectedOption}
              <ArrowIcon>&#9660;</ArrowIcon>
            </DropBtnLeft>
            {isOpen && (
              <DropdownContentLeft>
                {options.map((option, index) => (
                  <ItemHover
                    key={index}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </ItemHover>
                ))}
              </DropdownContentLeft>
            )}
            {/* isOpen이 true 일 때만 드롭다운 메뉴의 내용을 보여주고 각 항목을 클릭하면 handleOptionClick 함수가 호출 */}
          </DropdownLeft>
        </DropdownContainer>
        <Select2 />
      </Parent>
    </StBox>
  );
};

const DropBtnLeft = styled.button`
  width: 160px;
  height: 50px;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
`;

const DropdownContentLeft = styled.div`
  display: none;
  position: absolute;
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
  /* hover상태에서 DropdownContentLeft 컴포넌트의 스타일 변경 */
`;

const DropdownContainer = styled.div`
  display: block;
  width: 100px;
  height: 70px;
  float: left;
  position: static;
`;

const ItemHover = styled.button`
  display: flex;
  width: 160px;
  height: 50px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: lightblue;
  }
`;

const StBox = styled.div`
  display: flex;
  margin-bottom: 200px;
`;

const Parent = styled.div`
  overflow-y: auto;
  border: 1px solid blue;
  width: 800px;
  height: 80px;
`;

const ArrowIcon = styled.span`
  font-size: 14px;
`;
export default Select;
