import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import FollowedAppDetails from './FollowedAppDetails';

const LoadingBox = styled.div`
  width: 30%;
  margin: 16px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const fetchSingleApp = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [ _key, { appId }] = queryKey;
  const response = await fetch(`https://api.recruitment.4soft.tech/details/${appId}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const FollowedAppBox = ({ appId, unfollow }) => {
  const [refresh, setRefresh] = useState(false);

  const { data, error, status } = useQuery(['singleApp', { appId }], fetchSingleApp);

  return (
    <>
      {status === 'error' ? <div>{error.message}</div> : null}

      {status === 'loading' ? <LoadingBox>Loading...</LoadingBox> : null}

      {status === 'success' ? (
        <FollowedAppDetails
          data={data}
          refresh={() => setRefresh(!refresh)}
          unfollow={unfollow}
        />
      ) : null}
    </>
  );
};

export default FollowedAppBox;
