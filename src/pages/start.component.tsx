import React, { useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import Card from "../components/card.component";
import CreateServiceIcon from "../icons/create-service.icon";
import EditServiceIcon from "../icons/edit-service.icon";
import ServicesRankedIcon from "../icons/services-ranked.icon";
import VisualisationIcon from "../icons/visualisation.icon";
import Chevron from "../icons/chevron.icon";

import { AppContext } from "../contexts/app.context";
import { ServicesContext } from "../contexts/services.context";

interface StartProps extends RouteComponentProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.375rem;
  color: black;
  font-weight: 400;
  margin-bottom: 60px;
`;

const Description = styled.span`
  font-size: 2rem;
  color: black;
  font-weight: 500;
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 700px;
`;

// DODO: Create module with generic components
const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

const CardDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

const StartPage = (props: StartProps) => {
  const { history, location } = props;
  const { userName } = useContext(AppContext);
  const { setActiveService, logNewServices } = useContext(
    ServicesContext
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveService(false, null);
  }, [location.pathname]);

  return (
    <Container>
      <Title>Startsiden</Title>
      <Description>Hei {userName}.</Description>
      <Description>Hva trenger du å gjøre i dag?</Description>
      <ButtonColumn>
        <Card
          onClick={() => {
            history.push("edit-service");
          }}
        >
          <div style={{ display: "flex" }}>
            <CreateServiceIcon size={46} />
            <span style={{ marginRight: "20px" }} />
            <Container>
              <CardTitle>Opprett et nytt tilbud</CardTitle>
              <CardDescription>
                Er det et tilbud som mangler? Her kan du opprette et nytt
                med bl.a. tittel, beskrivelse og definere når tilbudet
                skal vises for innbyggeren.
              </CardDescription>
            </Container>
          </div>
        </Card>
        <Card
          onClick={() => {
            history.push("all-services");
          }}
        >
          <div style={{ display: "flex" }}>
            <EditServiceIcon size={46} />
            <span style={{ marginRight: "20px" }} />
            <Container>
              <CardTitle>
                Se alle tilbud/endre informasjon om et tilbud
              </CardTitle>
              <CardDescription>
                Endre tittel, beskrivelse, lenke, samt når tilbudet skal
                vises for innbyggeren. Du kan også slette et tilbud.
              </CardDescription>
            </Container>
          </div>
        </Card>
        <Card
          onClick={() => {
            history.push("service-ranking");
          }}
        >
          <div style={{ display: "flex" }}>
            <ServicesRankedIcon size={46} />
            <span style={{ marginRight: "20px" }} />
            <Container>
              <CardTitle>Se rangert tilbudsliste</CardTitle>
              <CardDescription>
                Få en oversikt over tilbud og tjenester, samt hvordan
                disse rangeres i veiviseren i dag. Her kan du også gjøre
                enkle justeringer om noe ser galt ut.
              </CardDescription>
            </Container>
          </div>
        </Card>
        <Card
          onClick={() => {
            history.push("tree-vis");
          }}
        >
          <div style={{ display: "flex" }}>
            <VisualisationIcon size={46} />
            <span style={{ marginRight: "20px" }} />
            <Container>
              <CardTitle>
                Se strukturen til veiviseren visualisert
              </CardTitle>
              <CardDescription>
                Få en visuell oversikt mål, hindringer og tjenester.
              </CardDescription>
            </Container>
          </div>
        </Card>
      </ButtonColumn>
    </Container>
  );
};

export default StartPage;
