import PropTypes from 'prop-types'

const AppInfo = props => {
  const { id, name, company, index, follow, isFollowed } = props;
  return (
    <div>
      <h3><span>{index}. </span>{name}</h3>
      <p>{company}</p>
      <button onClick={() => follow(id)} disabled={isFollowed}>Follow</button>
    </div>
  )
}

AppInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  company: PropTypes.string,
};

export default AppInfo
