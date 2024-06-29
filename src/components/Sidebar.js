// Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaCar, FaUsers, FaList, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  return (
    <SidebarContainer>
      <SidebarItem>
        <FaCar size={20}  />
        <span onClick={() => handleViewChange('addCar')}>Add Car</span>
      </SidebarItem>
      <SidebarItem>
        <FaUsers  size={20} />
        <span onClick={() => handleViewChange('viewUsers')}>Users</span>
      </SidebarItem>
      <SidebarItem>
        <FaList size={20} />
        <span  onClick={() => handleViewChange('bookings')}>Bookings</span>
      </SidebarItem>
      {/* <SidebarItem>
        <FaChartBar size={20} />
        <span>Statistics</span>
      </SidebarItem> */}
      <SidebarItem>
        <FaSignOutAlt size={20} />
        <span>Logout</span>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
