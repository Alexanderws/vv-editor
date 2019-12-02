import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import ActionButton from "../components/action-button.component";
import Card from "../components/card.component";

import { Service } from "../store/services.data";
import { contexts } from "../store/contexts.data";
import { ServicesContext } from "../contexts/services.context";

interface AllServicesProps extends RouteComponentProps {}

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

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const AllServicesPage = (props: AllServicesProps) => {
  const { history, location } = props;
  const [state, setState] = useState<any>({
    chosenContext: contexts[0].id,
    chosenFunctions: []
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const ServiceList = () => {
    const { services, getRankedServices, setActiveService } = useContext(
      ServicesContext
    );

    const handleEditClicked = (service: Service) => {
      console.log("handleEditClicked - service: ", service);
      setActiveService(true, service);
      history.push("edit-service");
    };

    return (
      <ServiceColumn>
        {services.map((service: any) => (
          <Card key={service.id}>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                <span style={{ fontWeight: 500 }}>Type:</span>{" "}
                {service.treatment}
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
      <Description>Her ser du en liste over alle tjenester</Description>
      <RowContainer>
        <ServiceColumn>
          <ServiceList />
        </ServiceColumn>
      </RowContainer>
    </ColumnContainer>
  );
};

export default AllServicesPage;
