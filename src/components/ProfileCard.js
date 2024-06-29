import React from 'react';
import { CardImg, Card, ListGroup } from 'react-bootstrap';

function ProfileCard({ changeOpen, isProfileOpen }) {
  return (
    <div>
      <Card style={{ width: '22rem' }} className='shadow'>
        <div className='d-flex justify-content-center'>
          <CardImg
            style={{ borderRadius: '50%', width: '150px', padding: '20px' }}
            src="https://i.postimg.cc/qv7sMD14/Screenshot-2024-05-20-080554.png"
            alt="User Profile Picture"
          />
        </div>
        <Card.Body>
          <Card.Title className='text-center'>Username</Card.Title>
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
          <ListGroup.Item>
            Logout
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default ProfileCard;
