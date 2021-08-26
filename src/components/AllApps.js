import PropTypes from 'prop-types'
import { AppInfo } from '.';

const AllApps = props => {
  const { apps, follow, followedAppsIds } = props;
  return (
    <div>
      <h2>All apps:</h2>
      {apps.map((app, index) => (
        <AppInfo 
          key={app.id}
          id={app.id}
          name={app.name} 
          company={app.company} 
          index={index + 1}
          follow={follow}
          isFollowed={followedAppsIds.includes(app.id)}
        />
      ))}
    </div>
  )
}

AllApps.propTypes = {

}

export default AllApps
