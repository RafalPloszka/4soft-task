import { useState } from 'react';
import PropTypes from 'prop-types';

import { FollowedAppDetails } from '.';

const FollowedAppInfo = props => {
  const { id, name, company, unfollow } = props;
  const [details, setDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchDetails = (id) => {
    if (!fetched) {
      fetch(`https://api.recruitment.4soft.tech/details/${id}`)
      .then(res => res.json()).then(result => setDetails(result))
      .then(setFetched(true)).then(setShowDetails(true));
    }
    else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{company}</p>
      <button onClick={() => fetchDetails(id)}>
        {!showDetails ? "Show details" : "Hide details"}
      </button>
      <button onClick={() => unfollow(id)}>
        Unfollow
      </button>
      {showDetails ? (
        <FollowedAppDetails 
          name={name}
          logo={details.logo}
          usersNumber={details.number_of_users}
          activeUsersNumer={details.number_of_actvive_users}
          serverAdress={details.server_adress}
          admin={details.admin}
        />) : null
      }
    </div>
  )
}

FollowedAppInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  company: PropTypes.string,
};

export default FollowedAppInfo;
