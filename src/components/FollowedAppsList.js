import PropTypes from 'prop-types'

import { FollowedAppInfo } from '.';

const FollowedAppsList = props => {
  const { data, unfollow } = props;

  return (
    <section>
      <h2>Your Apps:</h2>
      {data?.map((app) => (
        <FollowedAppInfo id={app.id} name={app.name} company={app.company} unfollow={unfollow} />
      ))}
      <br/>
      <p>*******************</p>
    </section>
  )
}

FollowedAppsList.propTypes = {

}

export default FollowedAppsList;
