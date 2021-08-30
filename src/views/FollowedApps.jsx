import React, { useContext } from 'react';
import styled from 'styled-components';

import { FollowedAppBox } from '../components';
import { AppContext } from '../store/appContext';

const Wrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 16px;
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  justify-content: left;
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  font-style: italic;
`;

const FollowedApps = () => {
  const [followedAppsIds, setFollowedAppsIds] = useContext(AppContext);

  const unfollow = (id) => {
    setFollowedAppsIds(followedAppsIds.filter((checked) => checked !== id));
  };

  return (
    <Wrapper>
      <h2>Followed apps</h2>
      <BoxesContainer>
        {followedAppsIds?.length > 0 ? (followedAppsIds.map((appId) => (
          <FollowedAppBox
            key={appId}
            appId={appId}
            unfollow={unfollow}
          />
        ))) : (
          <Info>You don&apos;t follow any apps yet, please choose some frome the side panel</Info>
        )}
      </BoxesContainer>
    </Wrapper>
  );
};

export default FollowedApps;
