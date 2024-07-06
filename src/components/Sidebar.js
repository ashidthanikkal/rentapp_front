// Sidebar.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaCar, FaUsers, FaList, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../services/Context';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  height: 100vh;
  width: 80px;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 1000;


  &:hover {
    width: 200px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    justify-content: space-around;

    &:hover {
      width: 100%;
    }
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3b4049;
  }

  & > span {
    display: none;
    margin-left: 10px;
  }

  ${SidebarContainer}:hover & > span {
    display: inline;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > span {
      display: inline;
      margin-left: 0;
      margin-top: 5px;
    }

    ${SidebarContainer}:hover & > span {
      display: inline;
    }
  }
`;

const Sidebar = ({handleViewChange}) => {
  const {isAdmin,setIsAdmin}=useContext(authContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    setIsAdmin(prev=>!prev)
    navigate("/authentication")
  }
  return (
    <SidebarContainer>

      <div onClick={() => handleViewChange('addCar')} className='w-100'>
        <SidebarItem>
          <FaCar  size={20}  />
          <span >Add Car</span>
        </SidebarItem>
      </div>

      <div onClick={() => handleViewChange('viewUsers')} className='w-100'>
        <SidebarItem>
          <FaUsers  size={20} />
          <span>Users</span>
        </SidebarItem>
      </div>

      <div  onClick={() => handleViewChange('bookings')} className='w-100'>
        <SidebarItem >
          <FaList size={20} />
          <span>Bookings</span>
        </SidebarItem>
      </div>

      {/* <SidebarItem>
        <FaChartBar size={20} />
        <span>Statistics</span>
      </SidebarItem> */}

      <div onClick={()=>handleLogout()} className='w-100'>
        <SidebarItem>
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </SidebarItem>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
