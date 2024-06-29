import { Divider, DatePicker } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Bookingcar.css'; // Import a custom CSS file
import Header from '../components/Header';

const { RangePicker } = DatePicker

function Bookingcar() {
    return (
        <div >
            <Header></Header>
            <div className='booking-container mt-5'>
                <Row className='d-flex align-items-center justify-content-center p-2'>
                    <Col lg={6} md={6} sm={12} className='mb-4'>
                        <img className='car-image' src="https://i.postimg.cc/DZ0r32hk/Opera-Blue-0-1.png" alt="Car" />
                    </Col>
    
                    <Col lg={6} md={6} sm={12} className='car-info p-3'>
                        <Divider type='horizontal' dashed>Car Info</Divider>
                        <div className='car-details'>
                            <h6>Tata Altroz</h6>
                            <h6><b>1000₹</b><sub>/day</sub></h6>
                            <h6>Max Person: 5</h6>
                            <h6>Manual/Auto: Manual</h6>
                            <h6>Fuel Type: Petrol</h6>
                            <h6>Mileage: 14Km</h6>
                        </div>
                        <Divider type='horizontal' dashed>Select Time Slot</Divider>
                        <div className='text-end booking-details'>
                            <RangePicker showTime={{ format: 'HH:mm' }} format='DD MM YYYY HH:mm'></RangePicker>
                            <h6>Day: 1 Day</h6>
                            <h6>Rent Per Day: 1000₹</h6>
                            <h6>Total: <span style={{color:"green"}}>1000₹</span></h6>
                            <button className='booking-btn'>Book Now</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Bookingcar
