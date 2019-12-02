import React from "react";
import styled from "styled-components";

interface ActionButtonProps {
  secondary?: boolean;
  onClick?: any;
  style?: any;
}

const ABtn = styled.button<any>`
  display: flex;
  height: 44px;
  font-size: 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 20px;

  ${({ secondary }) =>
    secondary
      ? "background-color: transparent; color: black; border: 2px solid black; :hover, :focus { text-decoration: underline;}"
      : "background-color: black; color: white; border: none; :hover, :focus { border: 2px solid black; background-color: white; color: black; }"}
`;

const ActionButton: React.FC<ActionButtonProps> = (props: any) => {
  const { secondary, ...otherProps } = props;
  return (
    <ABtn secondary={secondary} {...otherProps}>
      {props.children}
    </ABtn>
  );
};

export default ActionButton;
