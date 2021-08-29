import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { 
  ImInfo, 
  ImEyeMinus,
  ImSpinner11,
  ImCross,
  ImUsers,
  ImUserTie,
} from 'react-icons/im';

import { Button } from '.';

ReactModal.setAppElement('#root');

const Container = styled.div`
  width: 30%;
  margin: 16px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 12px 0px var(--shadow);
  -moz-box-shadow: 4px 4px 12px 0px var(--shadow);
  box-shadow: 4px 4px 12px 0px var(--shadow);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 12px;
`;

const StyledName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--main);
  };
`;

const StyledReactModal = styled(ReactModal)`
  width: 40vw;
  position: relative;
  margin: 52px auto;
  padding: 24px;
  background-color: #282c34;
  border-radius: 5px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CloseIcon = styled(ImCross)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: 32px 0 16px;
`;

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
    <Container>
      <Logo src={logo} alt={`${name} logo`}></Logo>
      <StyledName onClick={() => setIsModalOpen(true)}>{name}</StyledName>
      <Button onClick={() => setIsModalOpen(true)}> <ImInfo /></Button>
      <StyledReactModal isOpen={isModalOpen}>
        <h2>{name}</h2>
        <CloseIcon onClick={() => setIsModalOpen(false)}/>
        <p><b>Company:</b> {company}</p>
        <p><b>Server address:</b> {serverAddress}</p>
          <div>
            <p><ImUsers /> <b>Users</b></p>
            <p>all: {usersNumber}</p>
            <p>active: {activeUsersNumber}</p>
          </div>
          <div>
            <p><ImUserTie /> <b>Admin</b></p>
            <p>{adminFirstName} {adminLastName}</p>
            <p>{adminEmail}</p>
          </div>
        <ButtonsWrapper>
          <Button onClick={() => unfollow(id)}>Unfollow <ImEyeMinus/></Button>
          <Button onClick={refresh}>Refresh <ImSpinner11/></Button>
        </ButtonsWrapper>
      </StyledReactModal>
    </Container>
  )
}

export default AppInfo
