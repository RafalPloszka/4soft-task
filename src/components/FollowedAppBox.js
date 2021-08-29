import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { FollowedAppDetails } from '.';

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

const FollowedAppBox = ({ id, unfollow }) => {

  const [refresh, setRefresh] = useState(false);

  const fetchSingleApp = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    const response = await fetch(`https://api.recruitment.4soft.tech/details/${id}`)
  
    if (!response.ok) {
      throw new Error(response.statusText)
    }
  
    return response.json()
  }

  const { data, error, status } = useQuery(["singleApp", { id }], (id) =>
    fetchSingleApp(id)
  );

  return (
    <>
      {status === "error" ? <div>{error.message}</div> : null}

      {status === "loading" ? <LoadingBox>Loading...</LoadingBox> : null}

      {status === "success" && <FollowedAppDetails data={data} refresh={() => setRefresh(!refresh)} unfollow={unfollow} />}
    </>
  )
}

export default FollowedAppBox;
