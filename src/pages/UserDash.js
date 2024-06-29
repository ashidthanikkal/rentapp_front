import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Col, Container, Row} from 'react-bootstrap';
import Header from '../components/Header';
import Mybookings from '../components/Mybookings';

function UserDash() {
  const [open, setOpen] = useState(true);

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Header />
      <div className="dashboard">
        <Container>
          <Row>
            <Col lg={4}>
              <ProfileCard changeOpen={changeOpen} isProfileOpen={open} />
            </Col>
            <Col lg={8}>
              {open ? (
                <div className="shadow rounded-3 w-100">
                  <h3 className="text-center p-3">My profile</h3>
                  <div className="text-center">
                    <img
                      style={{ borderRadius: '50%', width: '150px', padding: '20px' }}
                      src="https://i.postimg.cc/qv7sMD14/Screenshot-2024-05-20-080554.png"
                      alt="Profile Picture"
                    />
                    <h5 className="text-center">Edit</h5>
                  </div>
                  <div className="p-5">
                    <input className="form-control my-4" type="text" placeholder="Name" />
                    <input className="form-control my-4" type="email" placeholder="Email" />
                    <input className="form-control my-4" type="text" placeholder="Phone" />
                    <input className="form-control my-4" type="text" placeholder="Address" />
                  </div>
                </div>
              ) : (
                <div>
                  <Mybookings />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserDash;
