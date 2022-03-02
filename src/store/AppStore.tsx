import React, { FC, useEffect, useState } from "react";
import { AppContext } from "./contexts";

export const AppStore: FC = ({ children }) => {
  const [appState, setAppState] = useState({});

  useEffect(() => {
    return setAppState({});
  }, []);

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
