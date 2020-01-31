import React, { useState, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

interface DemoProps extends RouteComponentProps {}

const GoalSelection = () => {};

const HindranceSelection = () => {};

const ResultList = () => {};

const DemoPage = (props: DemoProps) => {
  const [state, setState] = useState({
    hindrances: [],
    goal: "",
    currentSection: 0
  });

  return (
    <div>
      <div>HALLO</div>
    </div>
  );
};

export default DemoPage;
