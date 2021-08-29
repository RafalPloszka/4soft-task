import React, { useContext } from 'react';
import { ImEyePlus, ImEyeMinus } from 'react-icons/im';

import { AppContext } from '../store/appContext';

const AllAppsTable = ({ apps }) => {
  const [followedAppsIds, setFollowedAppsIds] = useContext(AppContext);

  const follow = (id) => {
    setFollowedAppsIds([...followedAppsIds, id]);
  };

  const unfollow = (id) => {
    setFollowedAppsIds(followedAppsIds.filter((checked) => checked !== id));
  };

  const rows = apps.map((app, index) => (
    <tr
      key={index}
    >
      <td>{app.id}</td>
      <td>{app.name}</td>
      <td>{app.company}</td>
      <td>
        {!followedAppsIds.includes(app.id) ? 
          <ImEyePlus onClick={() => follow(app.id)}/>
          : <ImEyeMinus onClick={() => unfollow(app.id)}/>
        }
      </td>
    </tr>
  ))

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Company</th>
            <th>Follow</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default AllAppsTable;
