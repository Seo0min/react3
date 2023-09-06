import React from "react";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Modal from "./components/modal/modal";
import Select from "./components/select/select";
import styled from "styled-components";

const App = () => {
  return (
    <Postion>
      <h1>Button</h1>
      <Button />
      <h1>Input</h1>
      <Input />
      <h1>Modal</h1>
      <Modal />
      <h1>Select</h1>
      <Select />
    </Postion>
  );
};

const Postion = styled.div`
  margin-left: 30px;
`;
export default App;
