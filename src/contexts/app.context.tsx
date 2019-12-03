import React, { useState } from "react";

type ContextProps = {
  userName: string;
  hasMadeChange: boolean;
  setHasMadeChange: any;
};

export const AppContext = React.createContext<ContextProps>({
  userName: "",
  hasMadeChange: true,
  setHasMadeChange: () => {}
});
AppContext.displayName = "AppContext";

const getUserName = () => {
  const possibleUsers = [
    "Alexander",
    "Håkon",
    "Per-Halvor",
    "Paul",
    "Elisabeth"
  ];
  //return possibleUsers[Math.floor(Math.random() * possibleUsers.length)];
  return "Alv";
};

export const AppContextProvider = (props: any) => {
  const [state, setState] = useState({
    userName: getUserName(),
    hasMadeChange: false
  });

  const setHasMadeChange = (hasMadeChange: boolean) => {
    setState((prevState: any) => ({
      ...prevState,
      hasMadeChange: hasMadeChange
    }));
  };

  const initialContext = {
    userName: state.userName,
    hasMadeChange: state.hasMadeChange,
    setHasMadeChange: setHasMadeChange
  };

  return (
    <AppContext.Provider value={initialContext}>
      {props.children}
    </AppContext.Provider>
  );
};
