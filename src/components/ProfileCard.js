import React from 'react'
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProfileCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }} className='shadow'>
                <div  className='d-flex justify-content-center' >
                    <CardImg style={{ borderRadius: "50%", width: "150px", padding:"20px"}} src="https://i.postimg.cc/qv7sMD14/Screenshot-2024-05-20-080554.png"  alt="" />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>Username</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>My Profile</ListGroup.Item>
                    <ListGroup.Item>My Bookings</ListGroup.Item>
                    <ListGroup.Item>Logout</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ProfileCard
