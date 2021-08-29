import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { ImInfo, ImEyeMinus, ImSpinner11, ImCross } from 'react-icons/im';

ReactModal.setAppElement('#root');

const AppInfo = ({ data, refresh, unfollow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { 
    id,
    name,
    logo,
    company,
    number_of_users: usersNumber,
    number_of_active_users: activeUsersNumber,
    server_address: serverAddress,
    admin: { 
      first_name: adminFirstName,
      last_name: adminLastName,
      email: adminEmail,
    },
  } = data;

  return (
    <div>
      <img src={logo} alt={`${name} logo`}></img>
      <span>{name}</span>
      <button onClick={() => setIsModalOpen(true)}>Details <ImInfo/></button>
      <ReactModal isOpen={isModalOpen}>
        <h2>{name}</h2>
        <ImCross onClick={() => setIsModalOpen(false)}/>
        <p>Company: {company}</p>
        <p>Users: {usersNumber}</p>
        <p>Active users: {activeUsersNumber}</p>
        <p>Server address: {serverAddress}</p>
        <p>Admin:</p>
        <p>name: {adminFirstName} {adminLastName}</p>
        <p>email: {adminEmail}</p>
        <button onClick={() => unfollow(id)}>Unfollow <ImEyeMinus/></button>
        <button onClick={refresh}>Refresh <ImSpinner11/></button>
      </ReactModal>
    </div>
  )
}

export default AppInfo
