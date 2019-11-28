import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: black;
  padding: 30px 60px;
  position: relative;
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
  return (
    <HeaderContainer>
      <Title>Innholdsforvaltning av Veiviser 60+</Title>
      <UserInfo>[Brukernavn om innlogget]</UserInfo>
    </HeaderContainer>
  );
};

export default Header;
