import PropTypes from 'prop-types'

const AppInfo = props => {
  const { name, logo, usersNumber, activeUsersNumber, serverAdress, admin } = props;
  console.log(serverAdress);
  return (
    <div>
      <img src={logo} alt={`${name} logo`}></img>
      <span>Number of users: {usersNumber}</span>
      <span>Number of active users: {activeUsersNumber}</span>
      <span>Server adress: {serverAdress}</span>
      {/* <span>Admin name: {admin.first_name}</span> */}
    </div>
  )
}

AppInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  company: PropTypes.string,
};

export default AppInfo
