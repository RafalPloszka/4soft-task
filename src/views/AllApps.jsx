import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { AllAppsTable } from '../components';

const Wrapper = styled.section`
  width: 40vw;
  height: 100vh;
  border-left: 2px solid #ededed;
  -webkit-box-shadow: 0 8px 24px 0px var(--shadow);
  -moz-box-shadow: 0 8px 24px 0px var(--shadow);
  box-shadow: 0px 8px 24px 0px var(--shadow);
  padding: 16px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.div`
  overflow-y: scroll;
`;

const AllApps = () => {
  const fetchAllApps = async () => (await fetch('https://api.recruitment.4soft.tech/list')).json();

  const { data, error, status } = useQuery('allAps', fetchAllApps);

  return (
    <Wrapper>
      <h2>All apps</h2>
      <TableContainer>
        {status === 'error' && <div>{error.message}</div>}

        {status === 'loading' && <div>Loading...</div>}

        {status === 'success' && <AllAppsTable apps={data} />}
      </TableContainer>
    </Wrapper>
  );
};

export default AllApps;
