import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header.component";
import StartPage from "./pages/start.component";
import EditServicePage from "./pages/edit-service.component";
import AllServicesPage from "./pages/all-services.component";
import TreeVisPage from "./pages/tree-vis.component";
import ServiceRankingPage from "./pages/service-ranking.component";
import ConfirmationBar from "./components/confirmation-bar.component";

import { AppContext } from "./contexts/app.context";
import "./fonts/fonts.css";

const MainContainer = styled.div`
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 40px 10px;
`;

const InnerContainer = styled.div`
  min-width: 340px;
  max-width: 1020px;
  margin: 0 auto;
  flex-grow: 1;
`;

const App: React.FC = () => {
  const { hasMadeChange } = useContext(AppContext);
  return (
    <React.Fragment>
      <Header />
      <MainContainer>
        <InnerContainer>
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
              path="/all-services"
              render={props => <AllServicesPage {...props} />}
            />
            <Route
              exact
              path="/service-ranking"
              render={props => <ServiceRankingPage {...props} />}
            />
            <Route
              exact
              path="/tree-vis"
              render={props => <TreeVisPage {...props} />}
            />
          </Switch>
        </InnerContainer>
      </MainContainer>
      {hasMadeChange ? <ConfirmationBar /> : ""}
    </React.Fragment>
  );
};

export default App;
