import React, { useContext } from 'react';
import { CardImg, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../services/Context';

function ProfileCard({ changeOpen, isProfileOpen,username }) {
  const {setIsAdmin}=useContext(authContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    setIsAdmin(prev=>!prev)
    navigate("/authentication")
  }
  return (
    <div>
      <Card style={{ width: '22rem' }} className='shadow'>
        <div className='d-flex justify-content-center'>
          <CardImg
            style={{ borderRadius: '50%', width: '150px', padding: '20px' }}
            src="https://i.postimg.cc/6pTqS6WS/Screenshot-2024-06-30-162542.png"
            alt="User Profile Picture"
          />
        </div>
        <Card.Body>
          <Card.Title className='text-center'>{username}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush text-center">
          <ListGroup.Item
            onClick={changeOpen}
            active={isProfileOpen}
            style={{cursor: "pointer"}}
          >
            My Profile
          </ListGroup.Item>
          <ListGroup.Item
            onClick={changeOpen}
            active={!isProfileOpen}
            style={{cursor: "pointer"}}
          >
            My Bookings
          </ListGroup.Item>
          <ListGroup.Item onClick={handleLogout} style={{cursor: "pointer"}}>
            Logout
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default ProfileCard;
