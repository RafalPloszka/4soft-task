import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImEyePlus, ImEyeMinus } from 'react-icons/im';

import { AppContext } from '../store/appContext';

const Table = styled.table`
  padding-right: 8px;
  & th, td {
    padding: 0.2em;
  }
`;

const Tr = styled.tr`
  color: ${(props) => (props.followed ? 'var(--main)' : '#fff')};
`;

const Th = styled.th`
  text-align: left;
`;

const IconCell = styled.td`
  text-align: center;;
`;

const StyledImEyePlus = styled(ImEyePlus)`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    fill: var(--main);
  }
`;

const StyledImEyeMinus = styled(ImEyeMinus)`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  fill: var(--main);
  &:hover {
    fill: var(--main-hover);
  }
`;

const AllAppsTable = ({ apps }) => {
  const [followedAppsIds, setFollowedAppsIds] = useContext(AppContext);

  const follow = (id) => {
    setFollowedAppsIds([...followedAppsIds, id]);
  };

  const unfollow = (id) => {
    setFollowedAppsIds(followedAppsIds.filter((checked) => checked !== id));
  };

  const rows = apps.map((app) => {
    const isFollowed = followedAppsIds.includes(app.id);
    return (
      <Tr
        key={app.id}
        followed={isFollowed}
      >
        <td>{app.id}</td>
        <td>{app.name}</td>
        <td>{app.company}</td>
        <IconCell>
          {!isFollowed
            ? <StyledImEyePlus onClick={() => follow(app.id)} />
            : <StyledImEyeMinus onClick={() => unfollow(app.id)} />}
        </IconCell>
      </Tr>
    );
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Follow</Th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllAppsTable;
