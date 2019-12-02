import React, { useContext } from "react";
import styled from "styled-components";

import ActionButton from "../components/action-button.component";

import { AppContext } from "../contexts/app.context";

const Container = styled.div`
  height: 180px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f9c66b;
  position: sticky;
  padding: 60px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2.8rem;
  flex-grow: 3;
`;

const ConfirmationBar = () => {
  const { setHasMadeChange } = useContext(AppContext);

  return (
    <Container>
      <Title>Endringene dine ble lagret!</Title>
      <div style={{ flexGrow: 1 }}>
        <ActionButton secondary onClick={() => setHasMadeChange(false)}>
          Den er god!
        </ActionButton>
      </div>
    </Container>
  );
};

export default ConfirmationBar;
