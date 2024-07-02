import React, { useCallback, useEffect, useState } from 'react';
import { Divider, DatePicker } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { bookCarApi, getCarByIdApi } from '../services/allApis';
import { baseUrl } from '../services/commonApi';
import moment from 'moment';
import './Bookingcar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

// const { RangePicker } = DatePicker;

function Bookingcar() {
    const [isLogedIn, setIsLogedIn] = useState(false);
    
    const [car, setCar] = useState({});
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [days, setDays] = useState(1); // Initialize days to 1
    const { carId } = useParams();

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            setIsLogedIn(true);
        }
    }, []);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const result = await getCarByIdApi(carId);
                setCar(result.data);
            } catch (error) {
                console.error("Error fetching car details:", error);
            }
        };
        fetchCarDetails();
    }, [carId]);

    const selectTimeSlots = (values) => {
        // setFrom(moment(values[0]).format('DD MM YYYY'));
        // setTo(moment(values[1]).format('DD MM YYYY'));
        // setDays(values[1].diff(values[0], 'days') + 1); // Calculate the difference in days and add 1 to include both start and end date
    };
        
console.log(from);
    const totalAmount = car?.rentamount ? car.rentamount * days : 0;

    const disabledDate = (current) => {
        // Disable dates before today
        return current && current < moment().startOf('day');
    };
    
    //book now
    const bookNow=async()=>{

        const reqObj={
            days,
            totalAmount,
            bookedTimeSlot:[{
                from,
                to
            }],
            transactionId:"12w"
        }

        const token=localStorage.getItem("token")

        const headerConfig = {
            "Content-Type": "application/json",
            "access_token": `Bearer ${token}`
        }
        try{
            const response=await bookCarApi(carId,reqObj,headerConfig)
            console.log(response);
        }
        catch(error){
            console.log(error);
        }

    }

    return (
        <div>
            <Header />
            <Container>
                <Link to={'/home'} style={{ textDecoration: "none" }}>
                    <h6 className='text-start'><i className="fa-solid fa-arrow-left"></i> Back To Home</h6>
                </Link>
            </Container>
            <div className='booking-container mt-5'>
                <Row className='d-flex align-items-center justify-content-center p-2'>
                    <Col lg={6} md={6} sm={12} className='mb-4'>
                        <img className='car-image' src={`${baseUrl}/uploads/${car.carimage}`} alt="Car" />
                    </Col>

                    <Col lg={6} md={6} sm={12} className='car-info p-3'>
                        <Divider type='horizontal' dashed>Car Info</Divider>
                        <div className='car-details'>
                            <h6>{car?.title}</h6>
                            <h6><b>{car?.rentamount}₹</b><sub>/day</sub></h6>
                            <h6>Max Person: {car?.seat}</h6>
                            <h6>Manual/Auto: {car?.cartype}</h6>
                            <h6>Mileage: {car?.milage} Km</h6>
                        </div>
                        <Divider type='horizontal' dashed>Select Time Slot</Divider>
                        <div className='text-end booking-details'>
                            {/* <RangePicker
                                format='DD MM YYYY'
                                onChange={selectTimeSlots}
                                disabledDate={disabledDate}
                            /> */}
                            <h6>Days: {days} Day{days > 1 ? 's' : ''}</h6>
                            <h6>Rent Per Day: {car?.rentamount}₹</h6>
                            <h6>Total: <span style={{ color: "green" }}>{totalAmount}₹</span></h6>

                            {isLogedIn ?
                                <Link to={'/payment'}><button className='booking-btn' onClick={bookNow}>Book Now</button></Link>
                                :
                                <Link to={'/authentication'}><button className='booking-btn'>Book Now</button></Link>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Bookingcar;
