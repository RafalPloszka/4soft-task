import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { FollowedAppDetails } from '.';

const FollowedAppBox = ({ id, follow, unfollow }) => {

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
    <div>
      {status === "error" && <div>{error.message}</div>}

      {status === "loading" && <div>Loading...</div>}

      {status === "success" && <FollowedAppDetails data={data} refresh={() => setRefresh(!refresh)} unfollow={unfollow} />}
    </div>
  )
}

export default FollowedAppBox;
