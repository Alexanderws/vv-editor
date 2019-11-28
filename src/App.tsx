import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { ServicesContextProvider } from "./contexts/services.context";

import Header from "./components/header.component";
import StartPage from "./pages/start.component";
import EditServicePage from "./pages/edit-service.component";
import ServiceRankingPage from "./pages/service-ranking.component";

const MainContainer = styled.div`
  padding: 40px 60px;
  background-color: #e3e3e3;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <ServicesContextProvider>
      <Header />
      <MainContainer>
        {" "}
        <Switch>
          <Route
            exact
            path="/"
            render={props => <StartPage {...props} />}
          />
          <Route
            exact
            path="/edit-service"
            render={props => <EditServicePage {...props} />}
          />
          <Route
            exact
            path="/service-ranking"
            render={props => <ServiceRankingPage {...props} />}
          />
        </Switch>
      </MainContainer>
    </ServicesContextProvider>
  );
};

export default App;
