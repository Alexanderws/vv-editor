import React, { useState } from "react";

import {
  Service,
  services as initialServices
} from "../store/services.data";

type ContextProps = {
  services: any[];
  isEditing: boolean;
  activeService: any;
  setActiveService: any;
  getRankedServices: any;
  addService: any;
  updateService: any;
};

interface ServiceContextStateProps {
  services: any[];
  isEditing: boolean;
  activeService: Service | null;
}

export const ServicesContext = React.createContext<ContextProps>({
  services: [],
  getRankedServices: () => {},
  isEditing: false,
  activeService: null,
  setActiveService: () => {},
  addService: () => {},
  updateService: () => {}
});
ServicesContext.displayName = "ServicesContext";

export const ServicesContextProvider = (props: any) => {
  const [state, setState] = useState<ServiceContextStateProps>({
    services: initialServices,
    isEditing: false,
    activeService: null
  });

  const setActiveService = (isEditing: boolean, serviceToEdit: any) => {
    const newService = isEditing ? serviceToEdit : null;
    setState((prevState: any) => ({
      ...prevState,
      isEditing: isEditing,
      activeService: newService
    }));
  };

  const addService = (service: any) => {
    setState((prevState: any) => ({
      ...prevState,
      services: [...prevState.services, service]
    }));
  };

  const updateService = (serviceToUpdate: any) => {
    setState((prevState: any) => ({
      ...prevState,
      services: prevState.services.map((service: any) => {
        if (service.id === serviceToUpdate.id) {
          return serviceToUpdate;
        }
        return service;
      })
    }));
  };

  const getRankedServices = (
    contextName: string,
    functionsList: string[]
  ) => {
    const relevantServices = state.services
      .filter((service: any) => service.contexts.includes(contextName))
      .sort((a: any, b: any) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 1
      );

    const scoredServices = relevantServices.map((service: any) => {
      var serviceScore =
        service.treatment === "forebyggende"
          ? 2
          : service.treatment === "behandlende"
          ? 1
          : 0;

      service.functions.forEach((functionObj: any) => {
        if (functionsList.includes(functionObj.name)) {
          serviceScore += functionObj.score as number;
        }
      });

      return {
        ...service,
        score: serviceScore
      };
    });

    return scoredServices.sort((a: any, b: any) => b.score - a.score);
  };

  const initialContext = {
    services: state.services,
    getRankedServices: getRankedServices,
    isEditing: state.isEditing,
    activeService: state.activeService,
    setActiveService: setActiveService,
    addService: addService,
    updateService: updateService
  };

  return (
    <ServicesContext.Provider value={initialContext}>
      {props.children}
    </ServicesContext.Provider>
  );
};
