import { useState, useEffect } from 'react';
import './App.css';
import { AllApps, FollowedAppsList } from './components';

const App = () => {
  const [apps, setApps] = useState([]);
  const [followedAppsIds, setFollowedAppsIds] = useState([]);
  useEffect(() => {
    fetch("https://api.recruitment.4soft.tech/list")
    .then(res => res.json()).then(result => setApps(result));
  }, []);

  const follow = (id) => {
    setFollowedAppsIds([...followedAppsIds, id]);
  };

  const unfollow = (id) => {
    setFollowedAppsIds(followedAppsIds.filter((checked) => checked !== id));
  };

  const followedApps = apps.filter((app) => followedAppsIds.includes(app.id));

  return (
    <div className="App">
      <header className="App-header">
        <FollowedAppsList data={followedApps} unfollow={unfollow} />
        <AllApps apps={apps} follow={follow} followedAppsIds={followedAppsIds} />
      </header>
    </div>
  );
}

export default App;
