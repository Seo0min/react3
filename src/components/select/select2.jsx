import React, { useState } from "react";
import styled from "styled-components";

const options = ["리액트", "자바", "스프링", "리액트네이티브"];

const Select2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("리액트");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropBtn onClick={toggleDropdown}>
        {selectedOption} <ArrowIcon>&#9660;</ArrowIcon>
      </DropBtn>
      {isOpen && (
        <DropdownContent>
          {options.map((option) => (
            <ItemHover key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </ItemHover>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 120px;
`;

const DropBtn = styled.button`
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

const ArrowIcon = styled.span`
  font-size: 14px;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const ItemHover = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  text-align: left;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

export default Select2;
