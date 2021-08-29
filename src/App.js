import { QueryClient, QueryClientProvider } from 'react-query';

import { AppContextProvider } from './store/appContext';
import { AllApps, FollowedApps } from './views';
import './App.css';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <div className="App">
          <header className="App-header">
            <FollowedApps />
            <AllApps />
          </header>
        </div>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
