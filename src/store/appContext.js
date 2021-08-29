import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [followedAppsIds, setFollowedAppsIds] = useState([]);

  return (
    <AppContext.Provider value={[followedAppsIds, setFollowedAppsIds]}>
      {props.children}
    </AppContext.Provider>
  )
};