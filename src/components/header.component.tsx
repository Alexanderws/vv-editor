import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../contexts/app.context";

const HeaderContainer = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 30px 10px;
  position: relative;
`;

const InnerContainer = styled.div`
  min-width: 350px;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
`;

const UserInfo = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

const Header = () => {
  const { userName } = useContext(AppContext);
  return (
    <HeaderContainer>
      <InnerContainer>
        <Title>Innholdsforvaltning av Veiviser 60+</Title>
        <UserInfo>Logget inn som {userName}</UserInfo>
      </InnerContainer>
    </HeaderContainer>
  );
};

export default Header;
