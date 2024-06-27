import React from 'react'
import ProfileCard from '../components/ProfileCard';
import { Col, Container, Row } from 'react-bootstrap';
import BookingCard from '../components/BookingCard';

function UserDash() {
  return (
    <div>
      <div className="dashboard">
        <h1 className='text-center'>User Dashboard</h1>
        <Container>
          <Row>
            <Col lg={4}>
              <ProfileCard></ProfileCard>
            </Col>
            <Col lg={8}>
              <div className='shadow rounded-3 '>
              <h3 className='text-center p-3'>My profile</h3>
                <div className='text-center'>
                  <img style={{ borderRadius: "50%", width: "150px", padding:"20px"}} src="https://i.postimg.cc/qv7sMD14/Screenshot-2024-05-20-080554.png"  alt="" />
                  <h5 className='text-center'>Edit</h5>
                </div>
                <div className='p-5'>
                  <input className='form-control my-4' type="text" />
                  <input className='form-control my-4' type="text" />
                  <input className='form-control my-4' type="text" />
                  <input className='form-control my-4' type="text" />
                </div>
              </div>
            </Col>
          </Row>


          <Row className='mt-5'>
            <Col lg={4}>
            </Col>

            <Col lg={8}>
              <div className='shadow rounded-3 p-5'>
                <h3 className='text-center'>My Bookings</h3>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>

              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  )
}

export default UserDash
