import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

import { AppContextProvider } from './store/appContext';
import { AllApps, FollowedApps } from './views';
import GlobalStyle from './globalStyle';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <GlobalStyle />
        <Wrapper>
          <FollowedApps />
          <AllApps />
        </Wrapper>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
