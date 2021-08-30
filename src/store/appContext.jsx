import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [followedAppsIds, setFollowedAppsIds] = useState([]);

  return (
    <AppContext.Provider value={[followedAppsIds, setFollowedAppsIds]}>
      {children}
    </AppContext.Provider>
  );
};
