import React from "react";
import styled from "styled-components";

interface CardProps {
  onClick?: any;
}

const Container = styled.div`
  background-color: white;
  padding: 20px 20px 16px 20px;
  border-bottom: 2px solid grey;
  color: black;
  display: flex;
  flex-direction: column;
  transition: margin-top 0.15s, border-bottom 0.15s;
  margin-bottom: 20px;

  ${({ onClick }) =>
    onClick
      ? ":hover { border-bottom: 4px solid grey; margin-top: -2px; cursor: pointer; }"
      : ""}
`;

const Card: React.FC<CardProps> = props => {
  const { onClick, ...otherProps } = props;

  return (
    <Container onClick={onClick} {...otherProps}>
      {props.children}
    </Container>
  );
};

export default Card;
