import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import ActionButton from "../components/action-button.component";
import Card from "../components/card.component";

import { Service } from "../store/services.data";
import { contexts } from "../store/contexts.data";
import { functions } from "../store/functions.data";
import { ServicesContext } from "../contexts/services.context";

interface ServiceRankingProps extends RouteComponentProps {}

const Spacer = styled.span`
  height: 20px;
  width: 20px;
  visibility: hidden;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: inherit;
`;

const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 720px;
  flex: 1;
`;

const OptionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 340px;
  max-width: 340px;
  margin-right: 20px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 1.375rem;
  color: black;
  font-weight: 400;
  margin-bottom: 60px;
  cursor: pointer;
`;

const Description = styled.span`
  font-size: 2rem;
  color: black;
  font-weight: 500;
  margin-bottom: 40px;
`;

// TODO: Create module with generic components
const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

const CardDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

const CardLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const ServiceRankingPage = (props: ServiceRankingProps) => {
  const { history, location } = props;
  const [state, setState] = useState<any>({
    chosenContext: contexts[0].id,
    chosenFunctions: []
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleContextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setState((prevState: any) => ({
      ...prevState,
      chosenContext: value
    }));
  };

  const handleFunctionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (state.chosenFunctions.includes(value)) {
      setState((prevState: any) => ({
        ...prevState,
        chosenFunctions: prevState.chosenFunctions.filter(
          (functionId: string) => functionId !== value
        )
      }));
    } else {
      setState((prevState: any) => ({
        ...prevState,
        chosenFunctions: [...prevState.chosenFunctions, value]
      }));
    }
  };

  const ContextList = () => {
    return (
      <React.Fragment>
        {contexts.map((goal: any) => {
          return (
            <label
              key={goal.id}
              style={{
                display: "flex",
                maxWidth: "320px",
                marginBottom: "8px"
              }}
            >
              <input
                style={{ marginRight: "4px" }}
                type="radio"
                name={goal.text}
                value={goal.id}
                checked={state.chosenContext === goal.id}
                onChange={handleContextChange}
              />
              {goal.text}
            </label>
          );
        })}
      </React.Fragment>
    );
  };

  const FunctionList = () => {
    const activeContext = contexts.find(
      (obs: any) => obs.id === state.chosenContext
    );
    return (
      <React.Fragment>
        {functions.map((obstacle: any) => {
          if (activeContext.hindrances.includes(obstacle.id)) {
            return (
              <label
                key={obstacle.id}
                style={{
                  display: "flex",
                  maxWidth: "320px",
                  marginBottom: "8px"
                }}
              >
                <input
                  style={{ marginRight: "4px" }}
                  type="checkbox"
                  name={obstacle.text}
                  value={obstacle.id}
                  checked={state.chosenFunctions.includes(obstacle.id)}
                  onChange={handleFunctionChange}
                />
                {obstacle.text}
              </label>
            );
          }
        })}
      </React.Fragment>
    );
  };

  const ServiceList = () => {
    const { getRankedServices, setActiveService } = useContext(
      ServicesContext
    );

    const handleEditClicked = (service: Service) => {
      setActiveService(true, service);
      history.push("edit-service");
    };

    return (
      <ServiceColumn>
        {getRankedServices(
          state.chosenContext,
          state.chosenFunctions
        ).map((service: any) => (
          <Card key={service.id}>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                <span style={{ fontWeight: 500 }}>Score:</span>{" "}
                {service.score}
              </span>
            </div>
            <RowContainer style={{ justifyContent: "flex-end" }}>
              <ActionButton
                secondary
                onClick={() => handleEditClicked(service)}
              >
                Rediger
              </ActionButton>
            </RowContainer>
          </Card>
        ))}
      </ServiceColumn>
    );
  };

  return (
    <ColumnContainer>
      <Title onClick={() => history.goBack()}>
        Tilbake til startsiden
      </Title>
      <Description>
        Her ser du en rangert liste over tjenestene
      </Description>
      <RowContainer>
        <OptionsColumn>
          <Card>
            <CardLabel>Mål</CardLabel>
            <ContextList />
            <Spacer />
            <CardLabel>Hindring</CardLabel>
            <FunctionList />
          </Card>
        </OptionsColumn>
        <ServiceColumn>
          <ServiceList />
        </ServiceColumn>
      </RowContainer>
    </ColumnContainer>
  );
};

export default ServiceRankingPage;
