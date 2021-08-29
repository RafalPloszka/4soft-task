import React, { useContext } from 'react';

import { FollowedAppBox } from '../components';
import { AppContext } from '../store/appContext';

const FollowedApps = () => {
  const [followedAppsIds, setFollowedAppsIds] = useContext(AppContext);

  const follow = (id) => {
    setFollowedAppsIds([...followedAppsIds, id]);
  };

  const unfollow = (id) => {
    setFollowedAppsIds(followedAppsIds.filter((checked) => checked !== id));
  };

  return (
    <div>
      <h2>Followed apps:</h2>
      {followedAppsIds.map((appId) => (
        <FollowedAppBox 
          key={appId}
          id={appId}
          follow={follow}
          unfollow={unfollow}
        />
      )
      )}
    </div>
  )
}

export default FollowedApps
